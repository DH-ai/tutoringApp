from django.db import models

# Create your models here.
class auth(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone = models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zip = models.CharField(max_length=50)
    country = models.CharField(max_length=50)


    def __str__(self):
        # write a good string representation for the model
        return f"{self.first_name} {self.last_name} ({self.username})"