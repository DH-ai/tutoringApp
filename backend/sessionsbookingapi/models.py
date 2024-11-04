# Create your models here.
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Session(models.Model):
    teacher_id = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sessions')
    topic = models.CharField(max_length=255)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    max_students = models.PositiveIntegerField()
    description = models.TextField(blank=True, null=True)


    def is_available(self):
        # Check if session still has available spots
        return self.bookings.count() < self.max_students

    def __str__(self):
        return f"{self.topic} by {self.teacher.username} at {self.start_time}"

class SessionBooking(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name='bookings')
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='session_bookings')
    booked_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('session', 'student')  # Prevent duplicate bookings

    def __str__(self):
        return f"Booking for {self.session} by {self.student.username}"
