from rest_framework import serializers
from .models import Session, SessionBooking

class SessionSerializer(serializers.ModelSerializer):
    available_spots = serializers.SerializerMethodField()

    class Meta:
        model = Session
        fields = ['id', 'teacher', 'topic', 'start_time', 'end_time', 'max_students', 'description', 'available_spots']

    def get_available_spots(self, obj):
        return obj.max_students - obj.bookings.count()

class SessionBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SessionBooking
        fields = ['id', 'session', 'student', 'booked_at']
