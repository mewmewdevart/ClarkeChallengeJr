# api/urls.py
from django.urls import path
from .views import fornecedores_api, CriarFornecedor

urlpatterns = [
    path('fornecedores/', fornecedores_api, name='lista_fornecedores'), 
    path('criar_fornecedor/', CriarFornecedor.as_view(), name='criar_fornecedor'),
]
