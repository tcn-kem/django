from KEM import settings
from django.core.management import setup_environ
setup_environ(settings)
from rice.models import Rice
rices = Rice.objects.all()
for i in rices:
	i.delete()

print Rice.objects.all()