from django.urls import path
from . import views

urlpatterns = [
    path('send_message/', views.send_message, name='send_message'),
    path('get_messages/<str:room_name>/', views.get_messages, name='get_messages'),
]