from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

# Register new user
@api_view(['POST'])
def register(request):
    username = request.data.get("username")
    password = request.data.get("password")
    # email = request.data.get("email")
    # phone = request.data.get("phone")
    # first_name = request.data.get("first_name")
    # last_name = request.data.get("last_name")
    # address = request.data.get("address")
    # city = request.data.get("city")
    # state = request.data.get("state")
    # zipcode = request.data.get("zip")
    # country = request.data.get("country")

    if username and password:
        user = User.objects.create_user(username=username, password=password,
                                        #  email=email, first_name=first_name, last_name=last_name, phone=phone, address=address, city=city, state=state, zip=zipcode, country=country
                                         )
        user.save()
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
    return Response({"message": "Failed to create user"}, status=status.HTTP_400_BAD_REQUEST)

# Login user and get JWT token
@api_view(['POST'])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    user = authenticate(username=username, password=password)
    if user:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
