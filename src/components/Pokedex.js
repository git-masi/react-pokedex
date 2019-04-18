import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

const pokedex = props => {

  const pokecardsArr = props.randomPokemon.map((el, index) => {
    return (
      <Pokecard
        row={props.row}
        key={el.name + (Math.random() * 1000)}
        id={el.id}
        name={el.name}
        type={el.type}
        exp={el.base_experience}
        index={index}
      />
    )
  });

  function calcExp(arr) {
    let output = 0;
    arr.forEach(el => {
      output += el.base_experience;
    })
    return output;
  }

  return (
    <div className="Pokedex">
      <div className="Pokedex--card-container">
        {pokecardsArr}
      </div>
      <p>Total Exp: {calcExp(props.randomPokemon)}</p>
    </div>
  )
}

export default pokedex;