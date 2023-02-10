import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../Components/Header'
import Pokemon from '../Components/Pokemon'
import Search from '../Components/Search'

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        setPokemons(response.data);
      })
      .catch(() => {
        alert("Algo fue mal");
      });
  }, []);
  console.log(pokemons);

  return (
    <>
      <Header />
      <div className="containerSearch">
        <Search />
      </div>
      <div className="containerPokemon">
        {pokemons.map((item, i) => (
          <Pokemon name={item.name} image={item.front_default} key={i} />
        ))}
      </div>
    </>
  );
}
