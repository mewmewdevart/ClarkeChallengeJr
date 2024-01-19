from django.db import models

class Fornecedor(models.Model):
	nome = models.CharField(max_length=255)
	logo = models.ImageField(upload_to='fornecedores/')
	estado = models.CharField(max_length=50)
	custo_por_kwh = models.DecimalField(max_digits=5, decimal_places=2)
	limite = models.CharField(max_length=100)
	clientes_totais = models.IntegerField()
	avaliacoes_totais = models.DecimalField(max_digits=3, decimal_places=1)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	def __str__(self):
		return self.nome
