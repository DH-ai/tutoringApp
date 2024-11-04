from django.urls import path
from .views import (UserRegisterView, UserLoginView, UserLogoutView, 
                    UserProfileView, UserProfileUpdateView, UserDeleteView,
                    UserPublicProfileView, TeacherListView)

urlpatterns = [
    path('register', UserRegisterView.as_view(), name='user-register'),
    path('login', UserLoginView.as_view(), name='user-login'),
    path('logout', UserLogoutView.as_view(), name='user-logout'),
    path('me', UserProfileView.as_view(), name='user-profile'),
    path('me/update', UserProfileUpdateView.as_view(), name='user-profile-update'),
    path('me/delete', UserDeleteView.as_view(), name='user-delete'),
    path('<int:user_id>', UserPublicProfileView.as_view(), name='user-public-profile'),
    path('teachers', TeacherListView.as_view(), name='teacher-list'),
]