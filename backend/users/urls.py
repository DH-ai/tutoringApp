from django.urls import path
from . import views


# List of url patterns
urlpatterns = [
    path('', views.index),

]
