from django.conf.urls import patterns,url
from apps.module07 import views

urlpatterns = patterns('',
	url(r'^$',views.evolution,name='evolution'),
	)