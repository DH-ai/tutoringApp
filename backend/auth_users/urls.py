from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path

from .views import (UserRegisterView, UserLoginView, UserLogoutView, UserProfileView,
                    UserProfileUpdateView, UserDeleteView, TeacherListView)

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('profile/<uuid:id>/',
         UserProfileView.as_view(), name='user-profile-id'),
    path('register/', UserRegisterView.as_view(), name='user-register'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('logout/', UserLogoutView.as_view(), name='user-logout'),

    path('profile/', UserProfileUpdateView.as_view(),
         name='user-profile-update',),
    path('profile/', UserDeleteView.as_view(),
         name='user-profile-delete',),
    path('teachers/', TeacherListView.as_view(), name='teacher-list'),
    path('refresh/', TokenRefreshView.as_view(),
         name='token_refresh', ),
]
