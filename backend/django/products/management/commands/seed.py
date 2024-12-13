import random
from decimal import Decimal
from datetime import timedelta
from django.core.management.base import BaseCommand
from django.utils import timezone
from products.models import Departure, Product

product_descriptions = [
    "Hike, bike and snorkel this unique archipelago and encounter its special wildlife, on an adventure immersed in the natural world",
    "Our top wish-listed long weekender – paddle, trek and sleep in scenery you can't afjord to miss",
    "Hike up five of Guatemala's volcanoes - dubbed 'The Ring of Fire' - ending up at spectacular Lake Atitlán",
]

product_locations = [
    "Norway",
    "Galapagos Islands, Ecuador",
    "Guatemala",
]

class Command(BaseCommand):
    help = "Populate the database with N ds"

    def add_arguments(self, parser):
        parser.add_argument("N", type=str, help="Number of ds to create")

    def handle(self, *args, **options):
        try:
            N = int(options["N"])
        except ValueError:
            self.stdout.write(self.style.ERROR("N must be an integer"))
            return
        
        ps = []
        ds = []

        if Product.objects.exists():
            Product.objects.all().delete()

        for n in range(N):
            subjects = [
                "The cat",
                "A traveler",
                "The engineer",
                "An artist",
                "The CEO",
                "A programmer",
            ]
            verbs = [
                "jumps over",
                "analyzes",
                "creates",
                "improves",
                "builds",
                "envisions",
            ]
            objects = [
                "a bridge",
                "the code",
                "a masterpiece",
                "a new startup",
                "the solution",
                "a challenge",
            ]
            adjectives = [
                "quickly",
                "efficiently",
                "creatively",
                "with precision",
                "with passion",
                "with curiosity",
            ]

            s = random.choice(subjects)
            v = random.choice(verbs)
            o = random.choice(objects)
            a = random.choice(adjectives)

            p = Product(
                name=f"{s} {v} {o} {a}.",
                description=random.choice(product_descriptions),
                location=random.choice(product_locations),
                difficulty=random.choice(["Easy", "Moderate", "Challenging", "Tough"]),
                duration=random.randint(3, 14),
            )
            ps.append(p)

        for i in range(0, len(ps), 10): 
            Product.objects.bulk_create(ps[i:i+10])

        ps = Product.objects.all()

        for p in ps: 
            max_pax = random.randint(5, 20)
            n_ds = random.randint(0, 20)
            for _ in range(n_ds):
                d = Departure(
                    product=p,
                    start_date=timezone.now().date() + timedelta(
                        days=random.randint(1, 365)
                    ),
                    price=Decimal(round(random.randint(250, 5000), 2)),
                    booked_pax=random.randint(0, max_pax),
                    max_pax=max_pax,
                )
                ds.append(d)

        for i in range(0, len(ds), 10): 
            Departure.objects.bulk_create(ds[i:i+10])

        self.stdout.write(
            self.style.SUCCESS(
                f"Successfully created {len(ps)} products and {len(ds)} ds."
            )
        )
