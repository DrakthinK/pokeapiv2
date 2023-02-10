import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from './Components/Pokemon'
import Pokedex from './Components/Pokedex'
import Search from './Components/Search'

function App() {
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
      <div className="flex flex-col justify-center items-center m-10">
        <img
          className="max-w-md w-2/3"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png"
        />
      </div>
      <div className="containerSearch">
        <Search />
      </div>
      <div className="containerPokemon">
      {pokemons.map((item, i) => (
        <Pokemon name={item.name} image={item.front_default} key={i}/>
      ))}
        <Pokedex />
      </div>
    </>
  );
}

export default App;
