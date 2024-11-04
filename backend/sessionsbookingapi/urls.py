from django.urls import path
from .views import AvailableSessionsListView, BookSessionView, CancelBookingView, UpdateSessionView

urlpatterns = [
    path('book/', BookSessionView.as_view(), name='book-session'),
    path('available/', AvailableSessionsListView.as_view(), name='available-sessions'),
    path('cancel/<int:pk>/', CancelBookingView.as_view(), name='cancel-booking'),
    path('update/<int:pk>/', UpdateSessionView.as_view(), name='update-session'),
]
