from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Session
from .serializers import WebChatSessionSerializer

class StartSessionView(APIView):
    """
    Creates a new WebChat session between a student and a teacher if not already created.
    If session exists, return the existing session.
    """
    def post(self, request, *args, **kwargs):
        student_id = request.data.get('student_id')
        teacher_id = request.data.get('teacher_id')

        if not student_id or not teacher_id:
            return Response({"detail": "Student ID and Teacher ID are required."}, status=status.HTTP_400_BAD_REQUEST)

        # Check if the session already exists
        existing_session = Session.objects.filter(student_id=student_id, teacher_id=teacher_id).first()

        if existing_session:
            # If session exists, return the existing session details
            serializer = WebChatSessionSerializer(existing_session)
            return Response(serializer.data, status=status.HTTP_200_OK)

        # If session doesn't exist, create a new session
        room_name = f"session_{student_id}_{teacher_id}"
        session = Session.objects.create(student_id=student_id, teacher_id=teacher_id, room_name=room_name)
        serializer = WebChatSessionSerializer(session)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
