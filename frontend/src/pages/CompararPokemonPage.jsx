import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../Components/Logo";
import Card from "../Components/Card";
import Search from "../Components/Search";
export default function PokemonPage(id) {
  return (
    <>
      <Logo />
      <div className="containerSearch">
        <Search />
      </div>
      <div className="containerPokemon">
        <Card />
      </div>
    </>
  );
}
