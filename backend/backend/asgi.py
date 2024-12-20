"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""


import os
from django.conf import settings
from django.core.asgi import get_asgi_application

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.urls import path
# from backend import settings
from webchatservice.consumers import ChatConsumer


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
# application = get_asgi_application()

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter([
            path("ws/chat/<uuid:room_name>/", ChatConsumer.as_asgi()),
        ])
    ),
})
