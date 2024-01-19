from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Fornecedor
from .serializers import FornecedorSerializer 

class CriarFornecedor(APIView):
    def post(self, request, format=None):
        serializer = FornecedorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def fornecedores_api(request):
    consumo_mensal = request.GET.get('consumo_mensal')
    print("Consumo Mensal:", consumo_mensal)
    
    if consumo_mensal:
        fornecedores = Fornecedor.objects.filter(
            limite__lte=consumo_mensal
        )
    else:
        fornecedores = Fornecedor.objects.all()

    data = [
        {
            'nome': fornecedor.nome,
            'logo': fornecedor.logo.url,
            'estado': fornecedor.estado,
            'custo_por_kwh': str(fornecedor.custo_por_kwh),
            'limite': fornecedor.limite,
            'clientes_totais': fornecedor.clientes_totais,
            'avaliacoes_totais': str(fornecedor.avaliacoes_totais),
        }
        for fornecedor in fornecedores
    ]

    print("Data:", data)

    return JsonResponse(data, safe=False)
