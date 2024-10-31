from django.shortcuts import render
from django.http import HttpResponse
from .models import auth
# Create your views here.

def index(request):
    au  = auth.objects.all()
    context = {
        'auth': au
    }
    return render(request, './templates/tour/index.html', context)
