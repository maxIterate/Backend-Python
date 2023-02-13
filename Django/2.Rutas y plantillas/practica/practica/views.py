from django.shortcuts import render
import os

image_list = os.listdir(r'C:\Users/Trabajo/maxIterate/Backend-Python/Django/practica/static/assets/images-list')

def index(request):
    return render(request, 'index.html', {})

def portfolio(request):
    return render(request, 'portfolio.html', {'image_list': image_list})