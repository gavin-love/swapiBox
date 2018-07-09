import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const Card = ({ info, getFavorites }) => {
  if (info.homeworld) {
    return (
      <div className="card">
        <h1>Name: {info.name}</h1>
        <h1>Home World: {info.homeworld}</h1>
        <h1>Species: {info.species}</h1>
        <h1>Population: {info.population}</h1>
        <button onClick={() => getFavorites(info)}>favorite</button>
      </div>
    );
  }

  if (info.terrain) {
    return (
      <div className="card">
        <h1>Name: {info.name}</h1>
        <h1>Terrain: {info.terrain}</h1>
        <h1>Population: {info.population}</h1>
        <h1>Climate: {info.climate}</h1>
        <h1>Residents: {info.residents.map(resident => resident.name)}</h1>
        <button onClick={() => getFavorites(info)}>favorite</button>
      </div>
    );
  }
  if (info.passengers) {
    return (
      <div className="card">
        <h1>Name: {info.name}</h1>
        <h1>Model: {info.model}</h1>
        <h1>Class: {info.class}</h1>
        <h1>Passengers: {info.passengers}</h1>
        <button onClick={() => getFavorites(info)}>favorite</button>
      </div>
    );
  }
  return <div />;
};

Card.propTypes = {
  info: PropTypes.object,
  getFavorites: PropTypes.func
};

export default Card;
