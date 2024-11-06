# serializers.py
from rest_framework import serializers
from .models import User
from django.contrib.auth.password_validation import validate_password


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        """
        Meta class for the User serializer.

        Attributes:
            model (django.db.models.Model): The model that this serializer is based on.
            fields (tuple): The fields to be included in the serialized output. This includes:
                - username (str): The username of the user.
                - email (str): The email address of the user.
                - password (str): The password of the user.
                - first_name (str): The first name of the user.
                - last_name (str): The last name of the user.
                - phone (str): The phone number of the user.
                - address (str): The address of the user.
                - city (str): The city of the user.
                - state (str): The state of the user.
                - zipcode (str): The zipcode of the user.
                - country (str): The country of the user.
                - bio (str): The biography of the user.
                - subjectsInterested (str): The subjects the user is interested in.
                - Role (str): The role of the user (student or teacher).
                - profile_picture (str): The profile picture of the user.
        """
        model = User
        fields = ('username', 'email', 'password', 'first_name', 'last_name', 'phone', 'address', 'city',
                  'state', 'zipcode', 'country', 'bio', 'subjectsInterested', 'role', 'profile_picture')

    def validate_password(self, value):
        # Validate the password using Django's validators
        validate_password(value)
        return value

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],  # 1
            email=validated_data['email'],  # 2
            first_name=validated_data['first_name'],  # 3
            last_name=validated_data['last_name', ''],  # 4
            phone=validated_data['phone', ''],  # 5
            address=validated_data['address', ''],  # 6
            city=validated_data['city', ''],  # 7
            state=validated_data['state', ''],  # 8
            zipcode=validated_data['zipcode', ''],  # 9
            country=validated_data['country', ''],  # 10
            bio=validated_data['bio', ''],  # 11
            subjectsInterested=validated_data['subjectsInterested', ''],  # 12
            role=validated_data['role'],  # 13
            profile_picture=validated_data['profile_picture', '']  # 14
        )
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'phone', 'address', 'city', 'state', 'zipcode',
                  # Expose fields as needed
                  'country', 'bio', 'subjectsInterested', 'role', 'profile_picture')


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'phone', 'address', 'city', 'state', 'zipcode',
                  # Allow updates to these fields
                  'country', 'bio', 'subjectsInterested', 'is_student', 'is_teacher')

    def update(self, instance, validated_data):

        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get(
            'first_name', instance.first_name)
        instance.last_name = validated_data.get(
            'last_name', instance.last_name)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.address = validated_data.get('address', instance.address)
        instance.city = validated_data.get('city', instance.city)
        instance.state = validated_data.get('state', instance.state)
        instance.zipcode = validated_data.get('zipcode', instance.zipcode)
        instance.country = validated_data.get('country', instance.country)
        instance.bio = validated_data.get('bio', instance.bio)
        instance.subjectsInterested = validated_data.get(
            'subjectsInterested', instance.subjectsInterested)
        instance.save()
        return instance


class UserPublicProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'phone', 'address', 'city', 'bio',
                  # Adjust fields to show in public profile
                  'subjectsInterested', 'is_student', 'is_teacher')


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
