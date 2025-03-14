from rest_framework import serializers

from auth_users.models import User
from .models import SessionsModel, SessionBooking

class CreateSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SessionsModel
        fields = ['id','teacher', 'title', 'description', 'date',
                  'start_time', 'end_time', 'max_students']
        
    def validate(self, data):
        # print(data)
        user_id = data['teacher']
        
        # check if the date and time coincide with another session
        start_time = data['start_time']

        date = data['date']
        overlapping_sessions = SessionsModel.objects.filter(
            teacher=user_id,
            date=date,
            start_time=start_time,

        )
        
       
        # print(overlapping_sessions)
        if overlapping_sessions.exists():
            print("overlapping_sessions")
            raise serializers.ValidationError(
                "You have another session during this time")
        
        return data


class SessionSerializer(serializers.ModelSerializer):
    available_spots = serializers.SerializerMethodField()

    class Meta:
        model = SessionsModel
        fields = ['id','teacher', 'title', 'description', 'date',
                  'start_time', 'end_time', 'max_students', 'available_spots',]

    def get_available_spots(self, obj):
        return obj.max_students - obj.booked_students


class SessionBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SessionBooking
        fields = ['id', 'sessionid','student']  # user_id -> student_id

    def validate(self, data):
        user_id = data['user_id']
        session_id = data['session_id']

        # Check if the session exists
        try:
            session = SessionsModel.objects.get(id=session_id)
        except SessionsModel.DoesNotExist:
            raise serializers.ValidationError("SessionsModel not found")

        # Check if the session is fully booked
        if session.bookings.count() >= session.capacity:
            raise serializers.ValidationError("This session is fully booked")

        # Check for overlapping sessions for the student
        overlapping_bookings = SessionBooking.objects.filter(
            user_id=user_id,
            session__start_time__lt=session.end_time,
            session__end_time__gt=session.start_time
        )
        if overlapping_bookings.exists():
            raise serializers.ValidationError(
                "You have another booking during this time")

        return data

    def create(self, validated_data):
        # Create a new booking with the validated data
        session = SessionsModel.objects.get(id=validated_data['sessionid'])
        user_id = validated_data['userid']
        booking = SessionBooking.objects.create(
            studentid=user_id,
            sessionid=session
        )
        return booking
