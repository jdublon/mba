from datetime import date
from decimal import Decimal
from django.test import TestCase
from ..models import Product, Departure


class DepartureModelTest(TestCase):
    def test_string_representation_includes_product_name(self):
        # arrange
        product = Product.objects.create(
            name="Test Product",
            description="Test Product Description",
            duration=10,
        )
        departure = Departure.objects.create(
            product=product,
            start_date=date(2024, 1, 10),
            price=Decimal("1000.00"),
            booked_pax=2,
            max_pax=10,
        )

        # act
        string_representation = str(departure)

        # assert
        self.assertIn(product.name, string_representation)