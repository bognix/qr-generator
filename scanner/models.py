from django.db import models


class User(models.Model):
    username = models.CharField(max_length=80)

    def __unicode__(self):
        return self.username


class Url(models.Model):
    value = models.CharField(max_length=200)
    user = models.ForeignKey(User)

    def __unicode__(self):
        return self.value
