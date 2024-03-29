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

  const {row, id, name, type, exp, index} = props;

  const classes = ['Pokecard', row === 'top' ? 'Pokecard--top-row' : 'Pokecard--bottom-row']

  return (
    <div
      className={classes.join(' ')}
      style={{
        animationName: 'Pokecard-show',
        animationDuration: `${((index * (1000 - (index * 100))) + 1000) + 'ms'}`,
        animationFillMode: 'forwards'
      }}>
      <h3>{name}</h3>
      <a className="Pokecard--img-container" href={`https://www.pokemon.com/us/pokedex/${name}`} target="_blank" rel="noreferrer noopener">
        <img 
          className="Pokecard--img"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addZeros(id)}.png`} alt={`the pokemon ${name}`}
        />
      </a>
      <p>Type: {type}</p>
      <p>Exp: {exp}</p>
    </div>
  )
}

export default pokecard;