from django.shortcuts import get_object_or_404
from rest_framework import serializers

from auth_users.models import User
from .models import Session,Message

class WebChatSessionSerializer(serializers.ModelSerializer):
 # Ensure UUID is correctly parsed
    class Meta:
        model = Session
        fields = ['id', 'student', 'teacher', 'created_at','room_name']

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['session', 'sender', 'receiver', 'message', 'timestamp']


