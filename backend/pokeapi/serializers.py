from  rest_framework  import  serializers
from .models import  Pokemon, Pokedex

class PokemonSerializers(serializers.ModelSerializer):
    class Meta:
        model= Pokemon
        fields=('name','abilities','base_experience','weight','stats')


class PokedexSerializers(serializers.ModelSerializer):
    class Meta:
        model= Pokedex
        fields=('name', 'descriptions', 'region', 'pokemon_entries')