import React from 'react';
import './Pokegame.css';
import Pokedex from './Pokedex';

const pokegame = props => {
  return (
    <div className="Pokegame">
      <Pokedex row="top"/>
      <Pokedex row="bottom"/>
    </div>
  )
}

export default pokegame;