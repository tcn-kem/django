from django.db import models
from django.utils.encoding import force_unicode
# Create your models here.
class Rice(models.Model):
	name = models.CharField(max_length=100)
	kind = models.CharField(max_length=100)
	number = models.CharField(max_length=100)
	area = models.CharField(max_length=100)
	terrain = models.CharField(max_length=100)
	character = models.CharField(max_length=100)
	seed = models.CharField(max_length=100)
	detail = models.CharField(max_length=100)
	pic = models.CharField(max_length=100)
	ref = models.CharField(max_length=100)
	def __unicode__(self):
		return force_unicode(self.name)
