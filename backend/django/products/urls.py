from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, DepartureViewSet

router = DefaultRouter()
router.register(r"products", ProductViewSet)
router.register(r"departures", DepartureViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
