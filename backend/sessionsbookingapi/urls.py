from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SessionViewSet, SessionBookingViewSet, SessionCreateViewSet

router = DefaultRouter()
router.register(r'createSession', SessionCreateViewSet,basename='createSession')
router.register(r'session', SessionViewSet)
router.register(r'bookings', SessionBookingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]