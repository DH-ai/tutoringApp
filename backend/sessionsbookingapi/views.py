
# Create your views here.
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from django.db.models import F, Count
from .models import Session, SessionBooking
from .serializers import SessionSerializer, SessionBookingSerializer

from rest_framework.permissions import AllowAny


class CreateSessionView(generics.CreateAPIView):
    '''Create a new session
    { REEQUEST BODY
        "teacher_id": "string",
        "title": "string",
        "description": "string",
        "date": "YYYY-MM-DD",
        "start_time": "HH:MM",
        "end_time": "HH:MM",
        "max_students": "integer"
    }
    '''

    serializer_class = SessionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(teacher=self.request.user)


class AvailableSessionsListView(generics.ListAPIView):
    """t all available sessions that have not reached the maximum number of students.
    """
    queryset = SessionBooking.objects.all()
    serializer_class = SessionBookingSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = SessionBooking.objects.annotate(num_bookings=Count(
            'bookings')).filter(num_bookings__lt=F('max_students'))
        teacher_id = self.request.query_params.get('teacher_id')
        if teacher_id:
            queryset = queryset.filter(teacher__id=teacher_id)

        return queryset
    serializer_class = SessionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(teacher=self.request.user)


class BookSessionView(generics.CreateAPIView):
    queryset = SessionBooking.objects.all()
    serializer_class = SessionBookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        # Call the serializer's validation and creation
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Save the new booking
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)

        return Response({
            "message": "Session booked successfully",
            "booking_id": serializer.instance.id,
            "session_id": serializer.data['session_id']
        }, status=status.HTTP_201_CREATED, headers=headers)


class CancelBookingView(generics.DestroyAPIView):
    serializer_class = SessionBookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return SessionBooking.objects.filter(student=self.request.user)


class UpdateSessionView(generics.RetrieveUpdateAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_update(self, serializer):
        session = self.get_object()
        if session.teacher != self.request.user:
            raise PermissionDenied("You can only update sessions you created.")
        serializer.save()
