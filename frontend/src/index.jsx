import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokedexPage from "./pages/PokedexPage";
import PokemonPage from "./pages/PokemonPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>

    <Routes>

      <Route path="/" element={<App />} />
      <Route path="pokedex" element={<PokedexPage />}/>
      <Route path="pokedex/:id" element={<PokemonDetailPage />}/>
      <Route path="pokemon" element={<PokemonPage />}/>
      <Route path="pokemon/:id" element={<PokemonDetailPage />}/>
    </Routes>
  </BrowserRouter>
);