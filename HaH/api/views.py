from rest_framework.generics import ListAPIView
from .serializers import ProductsSerializer
from .models import Products


class ProductsListView(ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
