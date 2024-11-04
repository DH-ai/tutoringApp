
# Create your views here.
from rest_framework import generics, permissions,status
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from django.db.models import F, Count
from .models import Session, SessionBooking
from .serializers import SessionSerializer, SessionBookingSerializer



class AvailableSessionsListView(generics.ListAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = Session.objects.annotate(num_bookings=Count('bookings')).filter(num_bookings__lt=F('max_students'))
        try:
            teacher = self.request.user
            queryset = queryset.exclude(teacher=teacher)
        except:
            teacher_id = self.request.query_params.get('teacher_id')

        
        if teacher_id:
            queryset = queryset.filter(teacher__id=teacher_id)
        
        return queryset


class BookSessionView(generics.CreateAPIView):
    serializer_class = SessionBookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        session = serializer.validated_data['session']
        if not session.is_available():
            raise ValidationError("This session is fully booked.")
        serializer.save(student=self.request.user)

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