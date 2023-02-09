import json
from django.http import HttpResponse
from rest_framework.decorators import api_view
import requests
from django.db import  connection
from .models import Pokemon,Pokedex
from rest_framework import   viewsets, permissions
from .serializers import PokemonSerializers,PokedexSerializers
from rest_framework import generics,status
from rest_framework.response import Response

#API POKEMON
class PokemonList(generics.ListAPIView):
     queryset = Pokemon.objects.all()
     permission_classes = [permissions.AllowAny]
     serializer_class = PokemonSerializers


class PokemononeByid(generics.RetrieveAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializers
    permission_classes = [permissions.AllowAny]

class PokemononeByname(generics.RetrieveAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializers
    permission_classes = [permissions.AllowAny]
    lookup_field = 'name'

#API POKEMON
class PokedexList(generics.ListAPIView):
    queryset = Pokedex.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PokedexSerializers


class PokedexoneByid(generics.RetrieveAPIView):
    queryset = Pokedex.objects.all()
    serializer_class = PokedexSerializers
    permission_classes = [permissions.AllowAny]


class PokedexoneByname(generics.RetrieveAPIView):
    queryset = Pokedex.objects.all()
    serializer_class = PokedexSerializers
    permission_classes = [permissions.AllowAny]
    lookup_field = 'name'


#insertar data desde api pokemon
@api_view(['GET'])
def Scrapingpokemon(request,numpag=None):
    if request.method == 'GET':
        #api pokemon
        api_pokemon='https://pokeapi.co/api/v2/pokemon/'
        cursor=connection.cursor()
        cursor.execute("TRUNCATE TABLE pokeapi_pokemon")
        PAGINAS= 2 if numpag==None else numpag
        cont=1
        items=0
        while cont<=PAGINAS:
            response_pokemon = requests.get(api_pokemon)
            data_pokemon = response_pokemon.json()
            api_pokemon_nex = data_pokemon['next']
            for pokemon in data_pokemon['results']:
                api_pokemon_detail=requests.get(pokemon['url'])
                data_pokemon_detail=api_pokemon_detail.json()
                pokemonsave = Pokemon.objects.create(name=pokemon['name'],
                                                     abilities=data_pokemon_detail['abilities'],
                                                     base_experience=data_pokemon_detail['base_experience'],
                                                     height=data_pokemon_detail['height'],
                                                     species=data_pokemon_detail['species'],
                                                     stats=data_pokemon_detail['stats'],
                                                     types=data_pokemon_detail['types'],
                                                     weight=data_pokemon_detail['weight'],
                                                     front_default=data_pokemon_detail['sprites']['front_default'])
            cont=cont+1
            api_pokemon=api_pokemon_nex
        return Response(f"api pokemon consumida numpag :#{PAGINAS} de 20 en 20",status=status.HTTP_200_OK)
    return Response("method prohibido", status=status.HTTP_400_BAD_REQUEST)

#insertar data desde api pokedex
@api_view(['GET'])
def Scrapingpokedex(request):
    if request.method == 'GET':
        #api pokemon
        api_pokedex='https://pokeapi.co/api/v2/pokedex/'
        cursor=connection.cursor()
        cursor.execute("TRUNCATE TABLE pokeapi_pokedex")
        PAGINAS= 2
        cont=1
        while cont<=PAGINAS or api_pokedex!=None:
            response_pokedex = requests.get(api_pokedex)
            data_pokedex = response_pokedex.json()
            api_pokedex_nex = data_pokedex['next']
            for pokedex in data_pokedex['results']:
                api_pokedex_detail=requests.get(pokedex['url'])
                data_pokedex_detail=api_pokedex_detail.json()
                pokedexsave = Pokedex.objects.create(name=pokedex['name'],
                                                     descriptions=data_pokedex_detail['descriptions'],
                                                     pokemon_entries=data_pokedex_detail['pokemon_entries'],
                                                     region=data_pokedex_detail['region']
                                                     )
            cont=cont+1
            api_pokedex=api_pokedex_nex
        return Response(f"api pokedex consumida numpag :#{PAGINAS} de 10 en 10",status=status.HTTP_200_OK)
    return Response("method prohibido", status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def compararPokemon(request):
        if request.method == 'POST':
            pokemonFirst=list(Pokemon.objects.filter(name=request.data['paramfirst']).values())
            pokemonSecond = list(Pokemon.objects.filter(name=request.data['paramsecond']).values())
            if len(pokemonFirst)==0:
                pokemonFirstResponse=requests.get('https://pokeapi.co/api/v2/pokemon/'+str(request.data['paramfirst']))
                if pokemonFirstResponse.status_code==200:
                    pokemonFirst=[pokemonFirstResponse.json()]
                else:
                    pokemonFirst=[{"error": "no encontrado"}]
            if len(pokemonSecond)==0:
                pokemonSecondReponse=requests.get('https://pokeapi.co/api/v2/pokemon/'+str(request.data['paramsecond']))
                if pokemonSecondReponse.status_code==200:
                   pokemonSecond=[pokemonSecondReponse.json()]
                else:
                    pokemonSecond=[{"error":"no encontrado"}]
            ganador = QuienEsMasProbableQueGaneUnDuelo(pokemonFirst[0], pokemonSecond[0])
            response_data={
                    "succes":"ok",
                    "data":{
                        "pokemon-firts": pokemonFirst[0],
                        "pokemon-second":pokemonSecond[0]
                    },
                    "ganador":ganador
                 }
            return Response(response_data, status=status.HTTP_200_OK)
            #print(json.dumps(response_data))
        response_data = {
            "error": "false",
             "messege":"method prohibido"

        }
        return Response(response_data, status=status.HTTP_400_BAD_REQUEST)


def QuienEsMasProbableQueGaneUnDuelo(pokemonFirst,pokemonSecond):
    ganador=None
    if "error" in pokemonFirst :
        ganador=pokemonSecond
    if "error" in pokemonSecond:
        ganador=pokemonFirst
    if "error" in pokemonFirst and "error" in pokemonSecond :
        return  None

    if ganador!=None:
        return  ganador
    #cualidades pokemon
    #pokemonfirst
    experiencia_pokemon_first=pokemonFirst['base_experience']
    dano_atake_pokemon_first=pokemonFirst['stats'][1]['base_stat']
    #pokemonsencond
    experiencia_pokemon_second = pokemonSecond['base_experience']
    dano_atake_pokemon_second = pokemonSecond['stats'][1]['base_stat']
    PUNTOS_F= 0
    PUNTOS_S= 0
    if experiencia_pokemon_first > experiencia_pokemon_second:
        PUNTOS_F +=1
    elif experiencia_pokemon_first == experiencia_pokemon_second:
        PUNTOS_F +=1
        PUNTOS_S +=1
    else:
        PUNTOS_S +=1

    if dano_atake_pokemon_second >  dano_atake_pokemon_second:
        PUNTOS_F += 1
    elif dano_atake_pokemon_second == dano_atake_pokemon_second:
        PUNTOS_F +=1
        PUNTOS_S +=1
    else:
        PUNTOS_S +=1

    if PUNTOS_F> PUNTOS_S:
        return  pokemonFirst
    elif PUNTOS_F==PUNTOS_S:
        return "0"
    else:
        return  pokemonSecond

    return -1

#def Scrapingpokemon(request):
#    if request.method == 'GET':
#        print("ok")
#        return  HttpResponse("OK LOGICA INSERTAR DATA")

