from django.urls import path
from .views import AvailableSessionsListView, BookSessionView, CancelBookingView, UpdateSessionView

urlpatterns = [
    path('sessions/available/', AvailableSessionsListView.as_view(), name='available-sessions'),
    path('sessions/book/', BookSessionView.as_view(), name='book-session'),
    path('sessions/cancel/<int:pk>/', CancelBookingView.as_view(), name='cancel-booking'),
    path('sessions/update/<int:pk>/', UpdateSessionView.as_view(), name='update-session'),
]
