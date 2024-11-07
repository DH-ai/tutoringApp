from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path

from .views import (UserRegisterView, UserLoginView, UserLogoutView, UserProfileView,
                    UserProfileUpdateView, UserDeleteView, TeacherListView,IsLoggedIn)

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('profile/<uuid:id>/',
         UserProfileView.as_view(), name='user-profile-id'),
    path('profile/update', UserProfileUpdateView.as_view(),
         name='user-profile-update',),
    path('profile/delete', UserDeleteView.as_view(),
         name='user-profile-delete',),
    
    
    path('register/', UserRegisterView.as_view(), name='user-register'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    path('logout/', UserLogoutView.as_view(), name='user-logout'),

    
    path('teachers/', TeacherListView.as_view(), name='teacher-list'),
    
    path('refresh/', TokenRefreshView.as_view(),
         name='token_refresh', ),
         path('isLoggedin/', IsLoggedIn.as_view(), name='is-loggedin'),
]
