from django.db import models
from django.db.models import Max

from datetime import datetime
import time


class CategoryCount(models.Model):
    id = models.IntegerField(primary_key=True, db_column='id')
    category = models.ForeignKey('Topics', db_column='category')
    count_date = models.DateField()
    count = models.IntegerField(blank=True, null=True)
    class Meta:
        #managed = False
        db_table = 'category_count'

    @classmethod
    def keyCount(cls, keyword):
        t = Topics.objects.get(topic_name=keyword).id
        print t
        catCount = cls.objects.filter(category=t)
        print catCount


class MonitorTopic(models.Model):
    id = models.IntegerField(primary_key=True, db_column='id')
    category = models.IntegerField(blank=True, null=True)
    docid = models.CharField(db_column='docId', max_length=40, blank=True) # Field name made lowercase.
    docdate = models.DateTimeField(db_column='docDate', blank=True, null=True) # Field name made lowercase.
    doccontent = models.TextField(db_column='docContent', blank=True) # Field name made lowercase.
    class Meta:
        #managed = False
        db_table = 'monitor_topic'



class MonitorTopicCluster(models.Model):
    id = models.IntegerField(primary_key=True, db_column='id')
    docid = models.CharField(db_column='docId', max_length=40, blank=True) # Field name made lowercase.
    #topicid = models.IntegerField(db_column='topicId', blank=True, null=True) # Field name made lowercase.
    topicid = models.ForeignKey('MonitorTopic', db_column='id')
    #category = models.IntegerField(blank=True, null=True)
    category = models.ForeignKey('Topics', db_column='id')
    class Meta:
        #managed = False
        db_table = 'monitor_topic_cluster'


class Topics(models.Model):
    id = models.IntegerField(primary_key=True)
    topic_name = models.CharField(max_length=45, blank=True)
    parent = models.ForeignKey('self', blank=True, null=True)
    hierarchy = models.IntegerField(blank=True, null=True)
    class Meta:
        #managed = False
        db_table = 'topics'

    @classmethod
    def get_tree(cls):
		rows = cls.objects.all()
		maxH = rows.aggregate(Max('hierarchy'))['hierarchy__max']
		#print maxH
		dataMap = {}
		for item in rows.values():
			dataMap[item['id']] = { "id":item['id'], 
									"label":item['topic_name'], 
									"parent_id":item['parent_id'], 
									"hierarchy":item['hierarchy'], 
									"children":[] }
		while maxH > 1:
			for key, value in dataMap.iteritems():
				if value['hierarchy'] == maxH:
					dataMap[value['parent_id']]['children'].append(value)
			dataMap = dict([(key, value) for key, value in dataMap.iteritems() 
									if value['hierarchy'] != maxH])
			maxH -= 1
		#get tree for jstree
		tree = [value for key, value in dataMap.iteritems()]
		return tree

    #get foreign key set of category_count table
    def keyCount(self):
        p = self.categorycount_set.all()
        ret = []
        for item in p:
            tup = item.count_date.timetuple()
            stamp = time.mktime(tup)
            ret.append({'count': item.count, 'count_date': stamp})
        return ret
