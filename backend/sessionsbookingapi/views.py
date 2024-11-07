from rest_framework import viewsets, permissions, serializers
from rest_framework.response import Response
from rest_framework.decorators import action

from django.db import models

from .models import SessionsModel, SessionBooking
from .serializers import SessionSerializer, SessionBookingSerializer


class SessionViewSet(viewsets.ModelViewSet):
    '''
    **GET** `api/sessions/list` with auth token 
        auth token == student 
            returns the students sesions list
        auth token == teacher 
            returns the sessions created by the teacher
        user_token == teacher
            returns the session created by the teacher 
        user_token == student 
            an empty json
    **GET** 'api/sessions/<uuid:sessionsID>' - with auth token sessionsif is if of sessionsModel.id
        returns the session details
    '''
    queryset = SessionsModel.objects.all()
    serializer_class = SessionSerializer
    permission_classes = [permissions.IsAuthenticated]
    #

    def perform_create(self, serializer: serializers):
        serializer.save(teacher=self.request.user)

    @action(detail=False, methods=['get'])
    def teacher_sessions(self, request, *args, **kwargs):
        teacher_sessions = self.queryset.filter(teacher=request.user)
        serializer = self.get_serializer(teacher_sessions, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def available(self, request, *args, **kwargs):
        available_sessions = self.queryset.filter(
            booked_students__lt=models.F('max_students'))
        serializer = self.get_serializer(available_sessions, many=True)
        return Response(serializer.data)


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
            "status":"OK"
        }
    ```
        adding to db handled in serverside
    
    **DELETE** `api/bookings/cancel` with auth token
        auth_token==student
        sessino_id == session_id
        deletes
    
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
