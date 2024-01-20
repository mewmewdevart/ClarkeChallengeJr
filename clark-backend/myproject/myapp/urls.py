# myapp/urls.py
from django.urls import path
from .views import SupplierList, SupplierDetail, home

urlpatterns = [
    path('suppliers/', SupplierList.as_view(), name='supplier-list'),
    path('suppliers/<int:pk>/', SupplierDetail.as_view(), name='supplier-detail'),
    path('', home, name='home'),
]
