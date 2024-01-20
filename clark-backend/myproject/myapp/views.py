# myapp/views.py
from rest_framework import generics
from .models import Supplier
from .serializers import SupplierSerializer
from django.shortcuts import render

class SupplierList(generics.ListCreateAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer

class SupplierDetail(generics.RetrieveDestroyAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer

def home(request):
    return render(request, 'index.html')
