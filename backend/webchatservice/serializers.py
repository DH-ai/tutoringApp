from rest_framework import serializers
from .models import WebChatSession

class WebChatSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebChatSession
        fields = ['id', 'student', 'teacher', 'created_at']
