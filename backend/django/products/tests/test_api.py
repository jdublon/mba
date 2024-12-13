from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIClient
from ..models import Product

class ProductAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_get_product_by_id_returns_200_if_product_exists(self):
        # arrange
        self.product = Product.objects.create(
            name="Test Product",
            description="Test Product Description",
            duration=10,
        )
        product_id = self.product.id

        # act
        response = self.client.get(f"/products/{product_id}/")

        # assert
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_product_by_id_returns_product_name_if_product_exists(self):
        # arrange
        self.product = Product.objects.create(
            name="Test Product",
            description="Test Product Description",
            duration=10,
        )
        product_id = self.product.id

        # act
        response = self.client.get(f"/products/{product_id}/")

        # assert
        self.assertEqual(response.data['name'], "Test Product")
