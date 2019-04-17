import React from 'react';
import './Pokecard.css';

const pokecard = props => {
  const {id, name, type, exp} = props;
  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`the pokemon ${name}`}/>
      <p>{type}</p>
      <p>{exp}</p>
    </div>
  )
}

export default pokecard;