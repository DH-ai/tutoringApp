from django.contrib import admin
from .models import User
# Register your models here.

admin.site.register(User)
admin.site.site_header = "Tutorite Admin"
admin.site.site_title = "Tutorite Admin Portal"
# admin.sites.AdminSite.site_url = '/admin/auth_users/user/'