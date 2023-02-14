import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailCard from "../Components/DetailCardPokemon";
import Logo from "../Components/Logo";
const PokemonDetailPage = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v2/pokemon/${params.id}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch(() => {
        alert("Algo fue mal");
      });
  }, []);

  return (
    <>
      <Logo />
      <DetailCard
        image={pokemon.front_default}
        name={pokemon.name}
        base_experience={pokemon.base_experience}
        weight={pokemon.weight}
      />
    </>
  );
};
export default PokemonDetailPage;
