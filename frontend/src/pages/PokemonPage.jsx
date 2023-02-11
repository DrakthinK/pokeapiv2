import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from '../Components/Logo'
import Card from '../Components/Card'
import Search from '../Components/Search'

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v2/pokemon/")
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
      <Logo />
      <div className="containerSearch">
        <Search />
      </div>
      <div className="containerPokemon">
        {pokemons.map((item, i) => (
          <Card name={item.name} image={item.front_default} key={i} />
        ))}
      </div>
    </>
  );
}
