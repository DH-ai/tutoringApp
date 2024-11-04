from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password
# Create your models here.


class User (AbstractUser):
    username = models.CharField(max_length=50,unique=True)
    password = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone = models.CharField(max_length=20, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    bio = models.CharField(max_length=50)
    subjectsInterested = models.CharField(max_length=50,blank=True)
    is_student = models.BooleanField(blank=True)
    is_teacher = models.BooleanField(blank=True)
    def __str__(self):
        return self.username

    class Meta:
        verbose_name = 'User Profile'
        verbose_name_plural = 'User Profiles'
    def set_password(self, password):
        # hash the password builting in django
        self.password = make_password(password)

