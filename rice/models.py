from django.db import models
from django.utils.encoding import force_unicode
# Create your models here.
class Rice(models.Model):
	name = models.CharField(max_length=1000)
	kind = models.CharField(max_length=1000)
	number = models.CharField(max_length=1000)
	area = models.CharField(max_length=1000)
	terrain = models.CharField(max_length=1000)
	character = models.CharField(max_length=1000)
	seed = models.CharField(max_length=1000)
	detail = models.CharField(max_length=1000)
	pic = models.CharField(max_length=1000)
	ref = models.CharField(max_length=1000)
	def __unicode__(self):
		return force_unicode(self.name)
