from django.contrib import admin
from django.urls import path
from .views import *
from web import views

urlpatterns = [
    path("", index),
    path('store', views.store_enquiry, name='enquiry.store'),
]
