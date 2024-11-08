from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import User
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserLoginSerializer, UserRegistrationSerializer
from .serializers import UserSerializer
from .serializers import UserUpdateSerializer
from .serializers import UserPublicProfileSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from django.contrib.auth import authenticate, login, logout




class UserProfileView(generics.RetrieveAPIView):
    """
    GET /api/users/profile

    GET /api/users/profile/{id}

    """
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        # Get user details based on authenticated user or specific id
        user_id = kwargs.get('id', None)

        

        
        if user_id:
            try:
                user = User.objects.filter(id=user_id).first()
            except:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            user = request.user
  
        if user:
            serializer = UserSerializer(user)
            return Response(serializer.data) 
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

class UserRegisterView(generics.CreateAPIView):
    """
    POST /api/users/register
    """
    serializer_class = UserRegistrationSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = UserRegisterView.serializer_class(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'access_token': str(refresh.access_token),
                'refresh_token': str(refresh),
                'user_id': str(user.id),
                "role": str(user.role)
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    """
    POST /api/users/login
    """
    permission_classes = [AllowAny]
    


    def post(self, request, *args, **kwargs):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user = authenticate(username=serializer.validated_data['username'], 
                                 password=serializer.validated_data['password'],)
            
            except:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
                
                
            
            if user:
                login(request, user)
                refresh = RefreshToken.for_user(user)
                return Response({
                    'access_token': str(refresh.access_token),
                    'refresh_token': str(refresh),
                    'user_id': str(user.id),
                    "role": str(user.role)

                })
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogoutView(APIView):
    """
    POST /api/users/logout
    """
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # Log out by removing the JWT token or handling session-based logout
        logout(request)
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)

class IsLoggedIn(APIView):
    """
    POST /api/users/isLoggedin
    """
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        return Response({'message': 'YES'}, status=status.HTTP_200_OK)
    
class UserProfileUpdateView(APIView):
    """
    PUT /api/users/profile
    """
    permission_classes = [IsAuthenticated]

    def put(self, request, *args, **kwargs):
        user = request.user
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDeleteView(generics.DestroyAPIView):
    """
    DELETE /api/users/profile
    """
    permission_classes = [IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        user = request.user
        user.delete()
        return Response({"message": "User deleted successfully"}, status=status.HTTP_204_NO_CONTENT)

class TeacherListView(generics.ListAPIView):

    """
    GET /api/users/teachers
    """
    serializer_class = UserPublicProfileSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return User.objects.filter(role="teacher")
    
    
"""
class RefreshTokenView(APIView):
    
    POST /api/users/refresh
    
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(username=serializer.validated_data['username'], 
                                 password=serializer.validated_data['password'])
            if user:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'access_token': str(refresh.access_token),
                    'refresh_token': str(refresh)
                })
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)4

"""