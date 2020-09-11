import React, { Component } from 'react';
import './Pokedex.css';

class Pokemon extends Component {
  render() {
    const {
      name,
      type,
      averageWeightValue,
      averageWeightMeasurementUnit,
      image,
    } = this.props;
    return (
      <div className="container-card">
        <div className="pokemons">
          <h2>{name}</h2>
          <p>
            {' '}
            <b> Type: </b>
            {type}
          </p>
          <p>
            {' '}
            <b> Average Weight: </b> {averageWeightValue} {averageWeightMeasurementUnit}
          </p>
        </div>
        <img className="image" src={image} alt={name} />
      </div>
    );
  }
}

export default Pokemon;
