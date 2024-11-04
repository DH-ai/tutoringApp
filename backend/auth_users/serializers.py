# serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'first_name', 'last_name', 'phone', 'address', 'city', 'state', 'zipcode', 'country', 'bio', 'subjectsInterested', 'is_student', 'is_teacher')

    def validate_password(self, value):
        validate_password(value)  # Validate the password using Django's validators
        return value

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone=validated_data['phone'],
            address=validated_data['address'],
            city=validated_data['city'],
            state=validated_data['state'],
            zipcode=validated_data['zipcode'],
            country=validated_data['country'],
            bio=validated_data['bio'],
            subjectsInterested=validated_data['subjectsInterested'],
            is_student=validated_data['is_student'],
            is_teacher=validated_data['is_teacher']
        )
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_student', 'is_teacher')  # Expose fields as needed

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'is_student', 'is_teacher')  # Allow updates to these fields

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.is_student = validated_data.get('is_student', instance.is_student)
        instance.is_teacher = validated_data.get('is_teacher', instance.is_teacher)
        instance.save()
        return instance

class UserPublicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'phone', 'address', 'city', 'bio', 'subjectsInterested', 'is_student', 'is_teacher')  # Adjust fields to show in public profile
