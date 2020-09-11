import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './Data';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Pokédex</h1>
        <div>
          {pokemons.map(pokemon => {
            return (
              <Pokemon
                key={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                averageWeightValue={pokemon.averageWeight.value}
                averageWeightMeasurementUnit={pokemon.averageWeight.measurementUnit}
                image={pokemon.image}
                moreInfo={pokemon.moreInfo}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
