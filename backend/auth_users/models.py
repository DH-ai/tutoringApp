from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password



class User (AbstractUser):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone = models.CharField(max_length=10, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=50, blank=True)
    city = models.CharField(max_length=50, blank=True)
    state = models.CharField(max_length=50, blank=True)
    zipcode = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)
    bio = models.CharField(max_length=400, blank=True)
    subjectsInterested = models.CharField(blank=True, max_length=400)
    is_student = models.BooleanField(default=False, blank=True)
    is_teacher = models.BooleanField(default=False, blank=True)

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'

    def set_password(self, password):
        # hash the password builting in django
        self.password = make_password(password)
