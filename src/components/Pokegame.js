import React from 'react';
import './Pokegame.css';
import Pokedex from './Pokedex';

const pokegame = props => {
  const pokemon = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ];

  function randomize(arr) {
    let output = [];
    // the condition here sets the number of cards to be output
    while (output.length < (arr.length / 2)) {
      let index = arr[Math.floor(Math.random() * arr.length)];
      if (output.indexOf(index) === -1) output.push(index);
    }
    return output;
  }

  const randomPokemon = randomize(pokemon);

  return (
    <div className="Pokegame">
      <Pokedex row="top" randomPokemon={randomPokemon}/>
      <Pokedex row="bottom" randomPokemon={randomPokemon}/>
    </div>
  )
}

export default pokegame;