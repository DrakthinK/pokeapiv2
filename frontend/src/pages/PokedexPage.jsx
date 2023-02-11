import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from '../Components/Logo'
import Card from '../Components/Card'
import Search from '../Components/Search'

export default function PokedexPage() {
  const [pokedexs, setPokedexs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v2/pokedex/")
      .then((response) => {
        setPokedexs(response.data);
      })
      .catch(() => {
        alert("Algo fue mal");
      });
  }, []);
  console.log(pokedexs);

  return (
    <>
      <Logo />
      <div className="containerSearch">
        <Search />
      </div>
      <div className="containerPokemon">
        {pokedexs.map((item, i) => (
          <Card name={item.name} key={i} />
        ))}
      </div>
    </>
  );
}