import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../Components/Logo";
import Card from "../Components/Card";
import Search from "../Components/Search";

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [value, setValue] = useState("");

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

  const filterResults = (pokemons, value) => {
    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  const filteredPokemons = filterResults(pokemons, value);

  return (
    <>
      <Logo />
      <div className="containerSearch">
        <Search filterResults={filterResults} value={value} setValue={setValue} />
      </div>
      <div className="containerPokemon">
        {filteredPokemons.map((item, i) => (
          <Card name={item.name} image={item.front_default} id={item.id} key={i} />
        ))}
      </div>
    </>
  );
}
