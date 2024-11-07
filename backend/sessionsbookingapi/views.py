from rest_framework import viewsets, permissions, serializers
from rest_framework.response import Response
from rest_framework.decorators import action

from django.db import models

from .models import SessionsModel, SessionBooking
from .serializers import SessionSerializer, SessionBookingSerializer




class SessionViewSet(viewsets.ModelViewSet):
    """
    **GET** `api/sessions/list` with auth token 
        - If auth token belongs to a student, return only sessions booked by the student.
        - If auth token belongs to a teacher, return only sessions created by the teacher.
        - If no sessions match, return an empty JSON array.

    **GET** `api/sessions/<uuid:session_id>` - Returns details for the session with specified session_id.
    """
    queryset = SessionsModel.objects.all()
    serializer_class = SessionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Customize queryset based on the role of the authenticated user."""
        user = self.request.user
        if user.is_teacher:
            return self.queryset.filter(teacher=user)
        elif user.is_student:
            return self.queryset.filter(booked_students=user)
        return self.queryset.none()  # For other users, return an empty queryset

    @action(detail=True, methods=['get'], url_path='details')
    def get_session_details(self, request, pk=None):
        """Retrieve details of a specific session by session ID."""
        try:
            session = self.get_object()
            serializer = self.get_serializer(session)
            return Response(serializer.data)
        except SessionsModel.DoesNotExist:
            return Response({'error': 'Session not found'}, status=404)

    @action(detail=False, methods=['get'], url_path='teacher-sessions')
    def teacher_sessions(self, request):
        """List all sessions created by the authenticated teacher."""
        if request.user.is_teacher:
            teacher_sessions = self.queryset.filter(teacher=request.user)
            serializer = self.get_serializer(teacher_sessions, many=True)
            return Response(serializer.data)
        return Response({'error': 'Only teachers can view this list'}, status=403)

    @action(detail=False, methods=['get'], url_path='available')
    def available(self, request):
        """Retrieve a list of available sessions with open spots."""
        available_sessions = self.queryset.filter(
            booked_students__lt=models.F('max_students')
        )
        serializer = self.get_serializer(available_sessions, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        """Save the session with the current user as the teacher."""
        if self.request.user.is_teacher:
            serializer.save(teacher=self.request.user)
        else:
            return Response({'error': 'Only teachers can create sessions'}, status=403)


class SessionBookingViewSet(viewsets.ModelViewSet):
    '''


    **POST** `api/bookings/make_booking` with auth token
    ```
    Requests
        {
            "studentID":token,
            "SessionsID":token,
        }
    
    Response
        {
            "status":"OK","FULL","ERROR"
        }
    ```
        adding to db handled in serverside
        
    **PUT** `api/bookings/update` with auth token and session_id
        auth_token==teacher
        session_id == session_id
        ```
            details to be changed in the session
        ```
        implmenting notificaiton to the students
    **DELETE** `api/bookings/cancel` with auth token
        auth_token==student
        sessino_id == session_id
        deletes
        auth_token==teacher
        session_id == session_id
        same removes the session for the teacher too and from its students list too
    '''
    queryset = SessionBooking.objects.all()
    serializer_class = SessionBookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        session = serializer.validated_data['session']
        if session.booked_students < session.max_students:
            session.booked_students += 1
            session.save()
            serializer.save(student=self.request.user)
        else:
            raise serializers.ValidationError("SessionsModel is fully booked.")

    def make_booking(self, request, *args, **kwargs):
        session_id = request.data.get('session_id')
        session = SessionsModel.objects.get(id=session_id)
        if session.booked_students < session.max_students:
            session.booked_students += 1
            session.save()
            booking = SessionBooking.objects.create(
                session=session,
                student=request.user
            )
            serializer = self.get_serializer(booking)
            return Response(serializer.data)
        return Response({"error": "Session is fully booked."}, status=400)

    @action(detail=False, methods=['post'])
    def cancel(self, request, *args, **kwargs):
        booking = self.get_queryset().filter(student=request.user).first()
        if booking:
            session = booking.session
            session.booked_students -= 1
            session.save()
            booking.delete()
            return Response({"message": "Booking cancelled."})
        return Response({"error": "Booking not found."}, status=404)
