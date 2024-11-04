from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SessionViewSet, SessionBookingViewSet

router = DefaultRouter()
router.register(r'sessions', SessionViewSet)
router.register(r'bookings', SessionBookingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]