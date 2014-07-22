# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = False` lines for those models you wish to give write DB access
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin.py sqlcustom [appname]'
# into your database.
from __future__ import unicode_literals

from django.db import models

class Concept(models.Model):
    conid = models.IntegerField(primary_key=True)
    concept = models.CharField(max_length=45, blank=True)
    def __unicode__(self):
        return self.concept
    class Meta:
        managed = False
        db_table = 'concept'
    
        
        
class ConKeyword(models.Model):
    keyid = models.IntegerField(primary_key=True)
    concept = models.IntegerField(blank=True)
    keyword = models.CharField(max_length=45, blank=True)
    def __unicode__(self):
        return self.keyword
    class Meta:
        managed = False
        db_table = 'con_keyword'
    
        
class CrawlData(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.TextField(blank=True)
    link = models.CharField(max_length=100, blank=True)
    source = models.CharField(max_length=45, blank=True)
    keyword = models.CharField(max_length=45, blank=True)
    pubdate = models.CharField(db_column='pubDate', max_length=45, blank=True) # Field name made lowercase.
    downdate = models.CharField(db_column='downDate', max_length=45, blank=True) # Field name made lowercase.
    content = models.TextField(blank=True)
    def __unicode__(self):
        return self.title+'\n'+self.content
    
    def value(self):
        pos = 0-len(self.keyword)
        score = 1
        while 1:
            pos = self.title.find(self.keyword,pos+len(self.keyword),-1)
            if pos != -1:
                print pos
                score += 5
            else:
                break
        pos = 0-len(self.keyword)
        while 1:
            pos = self.content.find(self.keyword,pos+len(self.keyword),-1)
            if pos != -1:
                print pos 
                score += 2
            else:
                break
        return score
    
    class Meta:
        managed = False
        db_table = 'crawl_data'
    
    