# clark_backend/urls.py
from django.contrib import admin
from django.urls import path, include
from .views import pagina_inicial

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('', pagina_inicial, name='pagina_inicial'),
]
