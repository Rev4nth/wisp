from django.urls import path

from wisp.web.views import InterestList

urlpatterns = [
    path('api/interests/', InterestList.as_view())
]
