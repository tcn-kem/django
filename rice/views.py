# Create your views here.
from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render
from rice.models import Rice
import clips_m
def index(request):
	return render(request,'index.html')

def result(request):
	#get submit form
	area = request.GET['submit-area']
	kind = request.GET['submit-kind']
	#terrain = request.GET['submit-terrain']
	terrain = ""
	clips_list = clips_m.myclip('rules.clips','provinces.clips',area,kind,terrain)
	rice_list = list()
	for i in clips_list:
		rice_list.append(Rice.objects.get(name=i))

	context = {'rices':rice_list}
	return render(request,'result.html',context)

def rice_index(request):
	rice_list = Rice.objects.all()
	context = {'rices':rice_list}
	return render(request,'rice_index.html',context)

def rice_detail(request, rice_id):
	rice = Rice.objects.get(pk=rice_id)
	context = {'rice': rice}
	return render(request,'rice.html',context)

def db(request):
	import sys,readfile
	from rice.models import Rice
	rules = [rule.strip() for rule in readfile.readfile("kem.csv")]
	for i in rules:
		i = i.split(',')
		r = Rice(name=i[0],kind=i[1],number=i[2],area=i[3],terrain=i[4],character=i[5],seed=i[6],detail=i[7],pic=i[8],ref=i[9])
		r.save()
	return HttpResponse("GG")
