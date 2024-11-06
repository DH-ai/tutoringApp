from django.urls import path
from .views import StartSessionView

urlpatterns = [
    path('sessions/start', StartSessionView.as_view(), name='start_session'),
    
]