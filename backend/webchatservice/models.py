from django.db import models
import backend
from auth_users.models import User
import uuid




class Session(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True, primary_key=True)
    student = models.ForeignKey(User, related_name='student_sessions', on_delete=models.CASCADE)
    teacher = models.ForeignKey(User, related_name='teacher_sessions', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    room_name = models.CharField(max_length=255, unique=True)
    def __str__(self):
        return f"Session between {self.student.username} and {self.teacher.username}"

class Message(models.Model):
    session = models.ForeignKey(Session, related_name='messages', on_delete=models.CASCADE)
    sender = models.ForeignKey(User, related_name = "sender",on_delete=models.CASCADE)
    receiver = models.ForeignKey(User,related_name = "reciever", on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.sender.username} to {self.session.room_name}"
