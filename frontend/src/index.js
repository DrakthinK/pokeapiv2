import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pokemon from './Components/Pokemon'
import Pokedex from './Components/Pokedex'
import Search from './Components/Search'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <div className='containerSearch'>
      <Search />
    </div>
    <div className='containerPokemon'>
      <Pokemon /><Pokemon /><Pokemon /><Pokemon />
      <Pokedex />
    </div>
  </>
);

