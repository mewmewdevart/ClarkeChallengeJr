from django.db import models

class Supplier(models.Model):
	name = models.CharField(max_length=255)
	logo = models.ImageField(upload_to='supplier_logos/')
	state = models.CharField(max_length=255)
	cost_per_kwh = models.FloatField()
	limit = models.CharField(max_length=255)
	total_customers = models.IntegerField()
	ratings = models.FloatField()

	def __str__(self):
		return self.name
