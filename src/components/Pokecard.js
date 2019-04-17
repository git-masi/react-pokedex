import React from 'react';
import './Pokecard.css';

const pokecard = props => {

  function addZeros(str){
    let output = str.toString();
    while (output.length < 3) {
      output = '0' + output;
    }
    console.log(output);
    return output;
  }

  const {id, name, type, exp} = props;
  
  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addZeros(id)}.png`} alt={`the pokemon ${name}`}/>
      <p>{type}</p>
      <p>{exp}</p>
    </div>
  )
}

export default pokecard;