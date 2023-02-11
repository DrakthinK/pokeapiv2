#from  rest_framework import routers


#router =routers.DefaultRouter()
#router.register('api/pokemon',PokemonList,'pokemon')
#urlpatterns=router.urls

from django.urls import path
from .api import (
        PokemonList, PokemononeByid,PokemononeByname,
        PokedexList, PokedexoneByid,PokedexoneByname,
        compararPokemon,Scrapingpokemon,Scrapingpokedex
        )

urlpatterns = [
    path('', PokemonList.as_view(),name="index"),
    path('api/v2/pokemon/', PokemonList.as_view(), name="pokemons"),
    path('api/v2/pokemon/<int:pk>', PokemononeByid.as_view(), name="pokemonid"),
    path('api/v2/pokemon/<str:name>', PokemononeByname.as_view(), name="pokemonname"),
    #comparar dos pokemons
    path('api/v2/pokemon/compare/', compararPokemon, name="pokemoncompare"),
    #scraping
    path('scrapingpokemon/<int:numpag>', Scrapingpokemon, name="insertardatapokemon"),
    path('scrapingpokemon/', Scrapingpokemon, name="insertardatadpokemon"),
    path('scrapingpokedex/', Scrapingpokedex, name="insertardatadpokedex"),

    path('api/v2/pokedex/', PokedexList.as_view(), name="pokedexs"),
    path('api/v2/pokedex/<int:pk>', PokedexoneByid.as_view(), name="pokedexid"),
    path('api/v2/pokedex/<str:name>', PokedexoneByname.as_view(), name="pokedexname"),

]