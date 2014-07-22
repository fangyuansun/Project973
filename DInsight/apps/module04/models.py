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

class Categories(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    parent_category_id = models.IntegerField(blank=True, null=True)
    keywords = models.CharField(max_length=255, blank=True)
    class Meta:
        managed = False
        db_table = 'categories'

class EventDocuments(models.Model):
    id = models.IntegerField(primary_key=True)
    event_id = models.IntegerField(blank=True, null=True)
    document_type = models.CharField(max_length=255, blank=True)
    document_id = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'event_documents'

class EventEntities(models.Model):
    id = models.IntegerField(primary_key=True)
    event_id = models.IntegerField()
    entity_type = models.CharField(max_length=255)
    entity_id = models.IntegerField()
    count = models.FloatField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'event_entities'

class EventRelations(models.Model):
    id = models.IntegerField(primary_key=True)
    started_event_id = models.IntegerField()
    ended_event_id = models.IntegerField()
    relation_type = models.CharField(max_length=255)
    class Meta:
        managed = False
        db_table = 'event_relations'

class Events(models.Model):
    id = models.IntegerField(primary_key=True)
    started_at = models.DateTimeField(blank=True, null=True)
    ended_at = models.DateTimeField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    category_id = models.IntegerField(blank=True, null=True)
    title = models.CharField(max_length=255)
    abstract = models.TextField(blank=True)
    keywords = models.TextField(blank=True)
    heat = models.FloatField(blank=True, null=True)
    sentiment_value = models.FloatField(blank=True, null=True)
    semantics_info = models.TextField(blank=True)
    sentiment_info = models.TextField(blank=True)
    cds_id = models.CharField(unique=True, max_length=255, blank=True)
    analysed_location_id = models.IntegerField(blank=True, null=True)
    subject_type = models.CharField(max_length=255, blank=True)
    class Meta:
        managed = False
        db_table = 'events'

class EventsTopics(models.Model):
    id = models.IntegerField(primary_key=True)
    event_id = models.IntegerField(blank=True, null=True)
    topic_id = models.IntegerField(blank=True, null=True)
    strength = models.FloatField()
    class Meta:
        managed = False
        db_table = 'events_topics'

class Images(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=255, blank=True)
    path = models.CharField(max_length=255, blank=True)
    url = models.CharField(max_length=255, blank=True)
    published_at = models.DateTimeField(blank=True, null=True)
    referer_url = models.CharField(max_length=255, blank=True)
    resource_type = models.CharField(max_length=255, blank=True)
    resource_id = models.IntegerField(blank=True, null=True)
    cds_id = models.CharField(unique=True, max_length=255, blank=True)
    hashcode = models.TextField(blank=True)
    analysed_keywords = models.TextField(blank=True)
    class Meta:
        managed = False
        db_table = 'images'

class KeywordTrends(models.Model):
    id = models.IntegerField(primary_key=True)
    keyword_id = models.IntegerField(blank=True, null=True)
    category_id = models.IntegerField(blank=True, null=True)
    time = models.DateTimeField(blank=True, null=True)
    score = models.FloatField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'keyword_trends'

class Keywords(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(unique=True, max_length=255)
    class Meta:
        managed = False
        db_table = 'keywords'

class Locations(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    longitude = models.FloatField(blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    radius = models.FloatField()
    code = models.CharField(unique=True, max_length=255, blank=True)
    alias = models.CharField(max_length=255, blank=True)
    parent_location_id = models.IntegerField(blank=True, null=True)
    kind = models.CharField(max_length=255, blank=True)
    class Meta:
        managed = False
        db_table = 'locations'

class Microposts(models.Model):
    id = models.IntegerField(primary_key=True)
    content = models.TextField(blank=True)
    user = models.CharField(max_length=255, blank=True)
    user_id = models.IntegerField(blank=True, null=True)
    source = models.CharField(max_length=255, blank=True)
    published_at = models.DateTimeField(blank=True, null=True)
    url = models.CharField(max_length=255, blank=True)
    retweet_count = models.IntegerField(blank=True, null=True)
    comment_count = models.IntegerField(blank=True, null=True)
    tweet_id = models.CharField(max_length=255, blank=True)
    cds_id = models.CharField(unique=True, max_length=255, blank=True)
    analysed_sentiment_words = models.CharField(max_length=255, blank=True)
    analysed_sentiment_value = models.FloatField(blank=True, null=True)
    analysed_keywords = models.TextField(blank=True)
    class Meta:
        managed = False
        db_table = 'microposts'

class NewsPages(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=255, blank=True)
    content = models.TextField(blank=True)
    url = models.CharField(max_length=255, blank=True)
    published_at = models.DateTimeField(blank=True, null=True)
    source = models.CharField(max_length=255, blank=True)
    category_id = models.IntegerField(blank=True, null=True)
    cds_id = models.CharField(unique=True, max_length=255, blank=True)
    analysed_persons = models.TextField(blank=True)
    analysed_locations = models.TextField(blank=True)
    analysed_organizations = models.TextField(blank=True)
    analysed_entities = models.TextField(blank=True)
    analysed_keywords = models.TextField(blank=True)
    analysed_tf = models.TextField(blank=True)
    analysed_location_id = models.IntegerField(blank=True, null=True)
    subject_type = models.CharField(max_length=255, blank=True)
    class Meta:
        managed = False
        db_table = 'news_pages'

class Organizations(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255, blank=True)
    abstract = models.TextField(blank=True)
    detailed_info = models.TextField(blank=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    class Meta:
        managed = False
        db_table = 'organizations'

class People(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    abstract = models.TextField(blank=True)
    detailed_info = models.TextField(blank=True)
    class Meta:
        managed = False
        db_table = 'people'

class SchemaMigrations(models.Model):
    version = models.CharField(unique=True, max_length=255)
    class Meta:
        managed = False
        db_table = 'schema_migrations'

class Sessions(models.Model):
    id = models.IntegerField(primary_key=True)
    session_id = models.CharField(max_length=255)
    data = models.TextField(blank=True)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    class Meta:
        managed = False
        db_table = 'sessions'

class TopicEntities(models.Model):
    id = models.IntegerField(primary_key=True)
    topic_id = models.IntegerField()
    entity_id = models.IntegerField()
    entity_type = models.CharField(max_length=255)
    count = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'topic_entities'

class Topics(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=255, blank=True)
    abstract = models.TextField(blank=True)
    keywords = models.TextField(blank=True)
    heat = models.FloatField(blank=True, null=True)
    started_at = models.DateTimeField(blank=True, null=True)
    ended_at = models.DateTimeField(blank=True, null=True)
    semantics_info = models.TextField(blank=True)
    sentiment_info = models.TextField(blank=True)
    cds_id = models.CharField(unique=True, max_length=255, blank=True)
    content_html = models.TextField(blank=True)
    category_id = models.IntegerField(blank=True, null=True)
    analysed_location_id = models.IntegerField(blank=True, null=True)
    kind = models.CharField(max_length=255, blank=True)
    algorithm = models.CharField(max_length=255, blank=True)
    short_title = models.CharField(max_length=255, blank=True)
    entity_relationship = models.TextField(blank=True)
    peek_time = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'topics'

class Videos(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=255, blank=True)
    abstract = models.CharField(max_length=255, blank=True)
    path = models.CharField(max_length=255, blank=True)
    url = models.CharField(max_length=255, blank=True)
    published_at = models.DateTimeField(blank=True, null=True)
    referer_url = models.CharField(max_length=255, blank=True)
    cds_id = models.CharField(unique=True, max_length=255, blank=True)
    resource_id = models.IntegerField(blank=True, null=True)
    resource_type = models.CharField(max_length=255, blank=True)
    analysed_keywords = models.TextField(blank=True)
    category_id = models.IntegerField(blank=True, null=True)
    source = models.CharField(max_length=255, blank=True)
    class Meta:
        managed = False
        db_table = 'videos'

