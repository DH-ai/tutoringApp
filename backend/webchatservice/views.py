from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, ListAPIView
from .models import Session,Message
from .serializers import WebChatSessionSerializer,MessageSerializer
from auth_users.models import User
import uuid
class StartSessionView(APIView):
    """
    Creates a new WebChat session between a student and a teacher if not already created.
    If session exists, return the existing session.
    """
    def post(self, request, *args, **kwargs):
        student_id = request.data.get('student')
        teacher_id = request.data.get('teacher')
        try:
            student_id = str(uuid.UUID(hex= student_id))
            teacher_id = str(uuid.UUID(hex=teacher_id))
            
            
            teacher_id = get_object_or_404(User, id= teacher_id)
            student_id = get_object_or_404(User, id= student_id)
            # return Response({"detail":f"{teacher_id.password}"}, status=status.HTTP_400_BAD_REQUEST)
            
        except ValueError:
            return Response({"detail": "Invalid UUID format"}, status=status.HTTP_400_BAD_REQUEST)
        
        if not student_id or not teacher_id:
            return Response({"detail": "Student ID and Teacher ID are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Check if the session already exists
        try:
            existing_session = Session.objects.filter(student=student_id, teacher=teacher_id).first()
        except Exception as e:
            return Response({"detail":f"{e}"}, status=status.HTTP_400_BAD_REQUEST)

        if existing_session:
            # If session exists, return the existing session details
            serializer = WebChatSessionSerializer(existing_session)
            return Response(serializer.data, status=status.HTTP_200_OK)

        # If session doesn't exist, create a new session
        room_name = f"session_{student_id.id}_{teacher_id.id}"
        session = Session.objects.create(student=student_id, teacher=teacher_id, room_name=room_name)
        serializer = WebChatSessionSerializer(session)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class SendMessageView(CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def perform_create(self, serializer):
        serializer.save(sender_id=self.request.data.get('sender_id'), receiver_id=self.request.data.get('receiver_id'))
    
    def create(self, request, *args, **kwargs):
        # Ensure that all necessary fields are provided
        if not request.data.get('session_id') or not request.data.get('message'):
            return Response({"error": "Missing required fields"}, status=status.HTTP_400_BAD_REQUEST)

        # Proceed with the creation of the message
        return super().create(request, *args, **kwargs)
    

class GetMessagesView(ListAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        session_id = self.kwargs['session_id']
        return Message.objects.filter(session_id=session_id).order_by('timestamp')