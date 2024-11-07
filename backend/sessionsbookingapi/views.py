from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions, serializers
from rest_framework.response import Response
from rest_framework.decorators import action
from auth_users.models import User
from django.db import models
from auth_users.serializers import UserSerializer
from .models import SessionsModel, SessionBooking
from .serializers import SessionSerializer, SessionBookingSerializer, CreateSessionSerializer
from rest_framework.permissions import AllowAny


class SessionCreateViewSet(viewsets.ModelViewSet):
    serializer_class = CreateSessionSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = SessionsModel.objects.all()

        # return SessionsModel.id

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()

        return Response({
            "session_id": serializer.data.get('id')
        })


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
        """Customize queryset based on the role of the authenticated user UUID."""
        user_uuid = self.request.user

        # Fetch the user instance associated with the UUID
        try:
            user = User.objects.get(id=user_uuid.id)
        except User.DoesNotExist:
            return self.queryset.none()  # Return an empty queryset if user not found

        # Apply role-based filtering based on the user instance
        if user.role == "teacher":
            return self.queryset.filter(teacher=user)
        elif user.role == "student":
            return self.queryset.filter(students_lists=user)


        return self.queryset.none()

    @action(detail=True, methods=['get'], url_path='')
    def get_session_details_from_id(self, request, pk=None):
        """Retrieve details of a specific session by session ID."""
        return  Response({'error': 'Session not found'}, status=404)

        try:
            session = self.get_object()
            serializer = self.get_serializer(session)
            
            return  Response({'error': 'Session not found'}, status=404)
        except SessionsModel.DoesNotExist:
            return Response({'error': 'Session not found'}, status=404)

    @action(detail=False, methods=['get'], url_path='teacher-sessions')
    def teacher_sessions(self, request):
        """List all sessions created by the authenticated teacher."""
        try:
            if request.user.role=="teacher":
                teacher_sessions = self.queryset.filter(teacher=request.user)
                serializer = self.get_serializer(teacher_sessions, many=True)
                return Response(serializer.data)
        except:
            return Response({'error': 'unable to retrieve '}, status=403)
        return Response({'error': 'Only teachers can view this list'}, status=403)

    def perform_create(self, serializer):
        """Save the session with the current user as the teacher."""
        if self.request.user.role == "teacher":
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
