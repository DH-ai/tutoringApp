from django.db import models
import backend
from auth_users.models import User



class Session(models.Model):
    student = models.ForeignKey(User, related_name='student_sessions', on_delete=models.CASCADE)
    teacher = models.ForeignKey(User, related_name='teacher_sessions', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Session between {self.student.username} and {self.teacher.username}"

class Message(models.Model):
    session = models.ForeignKey(Session, related_name='messages', on_delete=models.CASCADE)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.sender.username} to {self.session.room_name}"
