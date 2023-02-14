import React, { useState } from "react";
import axios from "axios";
import Logo from "../Components/Logo";
import Card from "../Components/Card";

export default function CompararPokemonPage() {
  const compararPokemon = async (paramfirst, paramsecond) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v2/pokemon/compare/",
        {
          paramfirst,
          paramsecond,
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const [pokemonFirst, setPokemonFirst] = useState("");
  const [pokemonSecond, setPokemonSecond] = useState("");
  const [ganador, setGanador] = useState({});

  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await compararPokemon(pokemonFirst, pokemonSecond);
    setGanador(response.ganador);
    setIsVisible(true);
  };
  console.log(ganador);
  return (
    <>
      <Logo />
      <div className="w-full max-w-xl">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="md:flex md:place-items-center mb-6">
            <div className="mb-4 w-11/12">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="Primer Pokemon"
              >
                Primer Pokemon
              </label>
              <input
                className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={pokemonFirst}
                onChange={(e) => setPokemonFirst(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="mb-4 w-11/12">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="Primer Pokemon"
              >
                Segundo Pokemon
              </label>
              <input
                className="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={pokemonSecond}
                onChange={(e) => setPokemonSecond(e.target.value)}
              />
            </div>
          </div>
          <div className="flex md:place-items-center justify-between">
            <button
              type="submit"
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Comparar
            </button>           
          </div>
          {isVisible && (
              <>
                <p>El ganador es: {ganador.name}</p>
                <Card
                  name={ganador.name}
                  image={ganador.front_default}
                  id={ganador.id}
                />
              </>
            )}
        </form>
      </div>
    </>
  );
}
