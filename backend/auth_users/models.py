from django.contrib.auth.models import AbstractUser
import uuid
from django.db import models
from django.contrib.auth.hashers import make_password
from django.utils.translation import gettext_lazy as _


class UserRole(models.TextChoices):
    STUDENT = 'student', _('Student')
    TEACHER = 'teacher', _('Teacher')


class User (AbstractUser):

    id = models.UUIDField(default=uuid.uuid4, editable=False,
                          unique=True, primary_key=True)  # unique id required 0
    # unique username required 1
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)  # password required 2
    # email required might look into email verification 4
    email = models.EmailField(max_length=50)
    # phone number optional 5
    phone = models.CharField(max_length=10, blank=True)
    first_name = models.CharField(max_length=50)  # first name required 6
    last_name = models.CharField(
        max_length=50, blank=True)  # last name optional 7
    address = models.CharField(max_length=50, blank=True)  # address optional 8
    city = models.CharField(max_length=50, blank=True)  # city optional 9
    state = models.CharField(max_length=50, blank=True)  # state optional 10
    zipcode = models.CharField(
        max_length=50, blank=True)  # zipcode optional 11
    country = models.CharField(
        max_length=50, blank=True)  # country optional 12
    bio = models.CharField(max_length=400, blank=True)  # bio optional 13
    subjectsInterested = models.CharField(
        blank=True, max_length=400)  # subjects interested optional 14
    role = models.CharField(max_length=10, choices=UserRole.choices,
                            default=UserRole.STUDENT)  # role required 15
    profile_picture = models.ImageField(
        upload_to='profile_pics/', null=True, blank=True)  # profile picture optional 16

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    # overriding the set_password method to hash the password before saving it
    def set_password(self, password):
        # hash the password builting in django
        self.password = make_password(password)

    def __str__(self):
        return f"{self.username} ({self.role})"
