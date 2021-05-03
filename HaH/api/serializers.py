from rest_framework import serializers
from .models import Products


class ProductsSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField()

    class Meta:
        model = Products
        fields = "__all__"
