from django.db import models

# Create a example model
class ExampleModel(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.name