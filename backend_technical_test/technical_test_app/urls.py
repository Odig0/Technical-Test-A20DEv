
from django.urls import path
from technical_test_app.views import chess
from technical_test_app.views import string
from .views import chess


urlpatterns = [
    path('chess/', chess, name='chess'),
    path('string/', string, name='string')
]