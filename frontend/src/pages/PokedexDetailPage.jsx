import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailCardPokedex from "../Components/DetailCardPokedex";
import Logo from "../Components/Logo";
import Card from "../Components/Card";
const PokedexDetailPage = () => {
  const params = useParams();
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v2/pokedex/${params.id}`)
      .then((response) => {
        setPokedex(response.data);
      })
      .catch(() => {
        alert("Algo fue mal");
      });
  }, []);

  return (
    <>
      <Logo />
      <DetailCardPokedex
        image={pokedex.front_default}
        name={pokedex.name}
      />
      <Card />
    </>
  );
};
export default PokedexDetailPage;