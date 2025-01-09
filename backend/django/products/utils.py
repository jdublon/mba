import random
from decimal import Decimal
from datetime import timedelta
from django.utils import timezone
from products.models import Departure, Product
from products.constants import PRODUCT_DESCRIPTIONS, PRODUCT_LOCATIONS, PRODUCT_SUBJECTS, PRODUCT_VERBS, PRODUCT_OBJECTS, PRODUCT_ADJECTIVES, DIFFICULTY_LEVELS

def generate_random_product():
    """
    Generate a random product with random data.
    """
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
    """
    Generate random departure data for a given product.
    """
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
