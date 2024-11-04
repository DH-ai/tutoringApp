from rest_framework import serializers
from .models import Session, SessionBooking

class SessionSerializer(serializers.ModelSerializer):
    available_spots = serializers.SerializerMethodField()

    class Meta:
        model = Session
        fields = ['id', 'teacher_id', 'topic', 'start_time', 'end_time', 'max_students', 'description', 'available_spots']

    def get_available_spots(self, obj):
        return obj.max_students - obj.bookings.count()

class SessionBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SessionBooking
        fields = ['session_id', 'user_id', 'booked_at']# user_id -> student_id 
    
    def validate(self, data):
        student_id = data['user_id']
        session_id = data['session_id']

        # Check if the session exists
        try:
            session = Session.objects.get(id=session_id)
        except Session.DoesNotExist:
            raise serializers.ValidationError("Session not found")

        # Check if the session is fully booked
        if session.bookings.count() >= session.capacity:
            raise serializers.ValidationError("This session is fully booked")

        # Check for overlapping sessions for the student
        overlapping_bookings = SessionBooking.objects.filter(
            student_id=student_id,
            session__start_time__lt=session.end_time,
            session__end_time__gt=session.start_time
        )
        if overlapping_bookings.exists():
            raise serializers.ValidationError("You have another booking during this time")

        return data

    def create(self, validated_data):
        # Create a new booking with the validated data
        session = Session.objects.get(id=validated_data['session_id'])
        student_id = validated_data['student_id']
        booking = SessionBooking.objects.create(
            student_id=student_id,
            session=session
        )
        return booking