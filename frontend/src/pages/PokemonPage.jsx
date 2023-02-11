import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../Components/Logo";
import Card from "../Components/Card";
import Search from "../Components/Search";
import { Link } from "react-router-dom";
export default function PokemonPage(id) {
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

  return (
    <>
      <Logo />
      <div className="containerSearch">
        <Search />
      </div>
      <div className="containerPokemon">
        {pokemons.map(item => (
          <Card name={item.name} image={item.front_default} key={item.id} />
        ))}
      </div>
    </>
  );
}
