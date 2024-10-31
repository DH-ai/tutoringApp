from django.urls import path, re_path
from . import views


# List of url patterns
urlpatterns = [
    re_path(r'^(?:.*)/?$', views.index),
    # path('api/', include('my_app.api.urls')),
    
]
