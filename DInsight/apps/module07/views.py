from django.shortcuts import render
from apps.module07.models import Concept, ConKeyword, CrawlData 
import datetime

def evolution(request):
    conid=1
    keywords = ConKeyword.objects.filter(concept=conid)
    kw = [k.keyword for k in keywords]
    data=CrawlData.objects.filter(keyword__in=kw).order_by("pubdate")
    #earlist=time.mktime(time.strptime(data[0].pubdate.replace('T',' '),'%Y-%m-%d %H:%M:%S'))
    #latest=data[-1].pubdate.replace('T',' ')
    earlist=data[0].pubdate.replace('T','-').replace(' ','-').split('-')
    d1=datetime.date(int(earlist[0]),int(earlist[1]),int(earlist[2]))
    latest=data[len(data)-1].pubdate.replace('T','-').replace(' ','-').split('-')
    d2=datetime.date(int(latest[0]),int(latest[1]),int(latest[2]))
    slots = (d2-d1).days
    result=[0]*(slots+1)
    for d in data:
        m=d.pubdate.replace('T','-').replace(' ','-').split('-')
        d3=datetime.date(int(m[0]),int(m[1]),int(m[2]))
        result[(d3-d1).days]+=d.value()
    
    context = {'data1':result[:11],
               'data2':result[10:21],
               'data3':result[20:]}
    return render(request,'evolution.html',context)
# Create your views here.
