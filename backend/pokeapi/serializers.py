from  rest_framework  import  serializers
from .models import  Pokemon, Pokedex

class PokemonSerializers(serializers.ModelSerializer):
    class Meta:
        model= Pokemon
        fields=('id','name','abilities','base_experience','weight','stats','front_default')


class PokedexSerializers(serializers.ModelSerializer):
    class Meta:
        model= Pokedex
        fields=('id','name', 'descriptions', 'region', 'pokemon_entries')