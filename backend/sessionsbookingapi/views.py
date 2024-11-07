from rest_framework import viewsets, permissions, serializers
from rest_framework.response import Response
from rest_framework.decorators import action

from django.db import models

from .models import SessionsModel, SessionBooking
from .serializers import SessionSerializer, SessionBookingSerializer

class SessionViewSet(viewsets.ModelViewSet):
    queryset = SessionsModel.objects.all()
    serializer_class = SessionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer:serializers):
        serializer.save(teacher=self.request.user)

    @action(detail=False, methods=['get'])
    def teacher_sessions(self, request, *args, **kwargs):
        teacher_sessions = self.queryset.filter(teacher=request.user)
        serializer = self.get_serializer(teacher_sessions, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def available(self, request, *args, **kwargs):
        available_sessions = self.queryset.filter(booked_students__lt=models.F('max_students'))
        serializer = self.get_serializer(available_sessions, many=True)
        return Response(serializer.data)

class SessionBookingViewSet(viewsets.ModelViewSet):
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
