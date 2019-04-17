import React from 'react';
import './Pokecard.css';

const pokecard = props => {

  function addZeros(str){
    let output = str.toString();
    while (output.length < 3) {
      output = '0' + output;
    }
    return output;
  }

  const {id, name, type, exp} = props;

  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img className="Pokecard--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addZeros(id)}.png`} alt={`the pokemon ${name}`}/>
      <p>Type: {type}</p>
      <p>Exp: {exp}</p>
    </div>
  )
}

export default pokecard;