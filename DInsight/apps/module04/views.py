from django.shortcuts import render

def home(request):
  return render(request, 'module04/home.html')
