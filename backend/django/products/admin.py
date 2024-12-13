from django.contrib import admin
from .models import Departure, Product

@admin.register(Departure)
class DepartureAdmin(admin.ModelAdmin):
    list_display = (
        "product",
        "start_date",
        "price",
        "max_pax",
        "booked_pax",
        "available_pax",
        "created_at",
        "updated_at",
    )
    readonly_fields = (
        "booked_pax",
        "available_pax",
        "created_at",
        "updated_at",
    )
    search_fields = ("product_id",)
    list_filter = ("product",)
    ordering = ("start_date",)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "description", "difficulty", "location", "duration", "created_at", "updated_at")
    readonly_fields = ("created_at", "updated_at")
    search_fields = ("name",)
    ordering = ("name",)
