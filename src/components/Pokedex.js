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

  return (
    <div className="Pokedex">
      <div
        style={{
          order: props.row === 'top' ? '2' : '0'
        }}
        className="Pokedex--card-container">
        {pokecardsArr}
      </div>
      <p
        style={{
          order: props.row === 'top' ? '1' : '0'
        }}
        className={`Pokedex--exp ${props.highestExp ? "Pokedex--winner" : "Pokedex--loser"}`}>
        Total Exp: {props.totalExp}
      </p>
    </div>
  )
}

export default pokedex;