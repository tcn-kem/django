from django.conf.urls import patterns, include, url
from rice import views
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
	url(r'^$', views.index,name='index'),
	url(r'^rice/$',views.rice_index,name='rice_index'),
	url(r'^rice/(?P<rice_id>\d+)/$', views.rice_detail, name='rice_detail'),
	url(r'^result',views.result,name='result'),
    url(r'^db',views.db,name='db')
    # Examples:
    # url(r'^$', 'KEM.views.home', name='home'),
    # url(r'^KEM/', include('KEM.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)
