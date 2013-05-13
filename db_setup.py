from KEM import settings
from django.core.management import setup_environ
setup_environ(settings)
from rice.models import Rice
import sys,readfile
rules = [rule.strip() for rule in readfile.readfile("kem.csv")]
for i in rules:
	i = i.split(',')
	r = Rice(name=i[0],kind=i[1],number=i[2],area=i[3],terrain=i[4],character=i[5],seed=i[6],detail=i[7],pic=i[8],ref=i[9])
	r.save()
print Rice.objects.all()