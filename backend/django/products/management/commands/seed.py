import random
from decimal import Decimal
from datetime import timedelta
from django.core.management.base import BaseCommand
from django.utils import timezone
from products.models import Departure, Product
from products.constants.constants import PRODUCT_DESCRIPTIONS, PRODUCT_LOCATIONS, PRODUCT_SUBJECTS, PRODUCT_VERBS, PRODUCT_OBJECTS, PRODUCT_ADJECTIVES, DIFFICULTY_LEVELS

def generate_random_product():
    subjects = random.choice(PRODUCT_SUBJECTS)
    verbs = random.choice(PRODUCT_VERBS)
    objects = random.choice(PRODUCT_OBJECTS)
    adjectives = random.choice(PRODUCT_ADJECTIVES)

    return Product(
        name=f"{subjects} {verbs} {objects} {adjectives}.",
        description=random.choice(PRODUCT_DESCRIPTIONS),
        location=random.choice(PRODUCT_LOCATIONS),
        difficulty=random.choice(DIFFICULTY_LEVELS),
        duration=random.randint(3, 14),
    )

def generate_random_departure(product):
    max_pax = random.randint(5, 20)
    number_of_departures = random.randint(0, 20)
    
    return [
        Departure(
            product=product,
            start_date=timezone.now().date() + timedelta(days=random.randint(1, 365)),
            price=Decimal(round(random.randint(250, 5000), 2)),
            booked_pax=random.randint(0, max_pax),
            max_pax=max_pax,
        )
        for _ in range(number_of_departures)
    ]

class Command(BaseCommand):
    help = "Populate the database with products and departures."

    def add_arguments(self, parser):
        parser.add_argument("N", type=int, help="Number of products to create.")

    def handle(self, *args, **options):
        N = options["N"]

        if Product.objects.exists():
            Product.objects.all().delete()

        # Generate products in batches
        products = [generate_random_product() for _ in range(N)]
        
        # Bulk create products
        self.bulk_create_in_batches(Product, products)

        # Generate departures for products
        departures = []
        for product in products:
            departures.extend(generate_random_departure(product))

        # Bulk create departures
        self.bulk_create_in_batches(Departure, departures)

        self.stdout.write(
            self.style.SUCCESS(
                f"Successfully created {len(products)} products and {len(departures)} departures."
            )
        )

    def bulk_create_in_batches(self, model_class, objects, batch_size=10):
        """
        Bulk create model instances in batches to avoid memory overflow.
        """
        for i in range(0, len(objects), batch_size):
            model_class.objects.bulk_create(objects[i:i + batch_size])