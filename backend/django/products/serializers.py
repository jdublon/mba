from rest_framework import serializers
from .models import Product, Departure


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "description",
            "difficulty",
            "location",
            "duration"
        ]


class DepartureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departure
        fields = [
            "product",
            "start_date",
            "price",
            "available_pax"
        ]