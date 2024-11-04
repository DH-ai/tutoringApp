
# Create your views here.
from rest_framework import generics, permissions
from .models import Session
from .serializers import SessionSerializer
from django.db import models


class AvailableSessionsListView(generics.ListAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Session.objects.filter(bookings__count__lt=models.F('max_students')).distinct()
