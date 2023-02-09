from django.db import models

# Create your models here.
class Pokemon(models.Model):
    name=models.CharField(max_length=200)
    abilities=models.JSONField(null=True,blank=True)
    base_experience=models.IntegerField(null=True,max_length=10)
    height=models.IntegerField(null=True,max_length=10)
    species=models.JSONField(null=True,blank=True)
    stats=models.JSONField(null=True,blank=True)
    types=models.JSONField(null=True,blank=True)
    weight=models.IntegerField(max_length=10)
    front_default=models.URLField(null=True,blank=True)

class Pokedex(models.Model):
    name=models.CharField(max_length=200)
    descriptions=models.JSONField(null=True,blank=True)
    pokemon_entries=models.JSONField(null=True,blank=True)
    region=models.JSONField(null=True,blank=True)