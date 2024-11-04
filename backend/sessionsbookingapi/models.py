from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Session(models.Model):
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField(default='2024-11-04')
    start_time = models.TimeField()
    end_time = models.TimeField()
    max_students = models.PositiveIntegerField()
    booked_students = models.PositiveIntegerField(default=0)

    def is_available(self):
        # Check if session still has available spots
        return self.bookings.count() < self.max_students

    def __str__(self):
        return f"{self.title} by {self.teacher.username} at {self.start_time}"

class SessionBooking(models.Model):
    session = models.ForeignKey(
        Session, on_delete=models.CASCADE, related_name='bookings')
    student = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='session_bookings')

    class Meta:
        unique_together = ('session', 'student')  # Prevent duplicate bookings

    def __str__(self):
        return f"Booking for {self.session} by {self.student.username}"