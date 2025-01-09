from rest_framework import viewsets
from .models import Product, Departure
from .serializers import ProductSerializer, DepartureSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class DepartureViewSet(viewsets.ModelViewSet):
    serializer_class = DepartureSerializer
    queryset = Departure.objects.all()
