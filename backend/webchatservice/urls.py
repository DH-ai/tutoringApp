from django.urls import path
from .views import StartSessionView,SendMessageView,GetMessagesView

urlpatterns = [
    path('sessions/start', StartSessionView.as_view(), name='start_session'),
    path('messages/send', SendMessageView.as_view(), name='send_message'),
    path('messages/<uuid:session_id>', GetMessagesView.as_view(), name='get_messages'),

]