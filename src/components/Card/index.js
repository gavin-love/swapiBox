import React from "react";

const Card = props => {
  if (props.homeworld) {
    return (
      <div>
        <h1>{props.name}</h1>
        <h1>{props.homeworld}</h1>
        <h1>{props.species}</h1>
        <h1>{props.population}</h1>
        <button onClick={() => props.handleFavorites(props)}>favorite</button>
      </div>
    );
  }

  if (props.terrain) {
    return (
      <div>
        <h1>{props.name}</h1>
        <h1>{props.terrain}</h1>
        <h1>{props.population}</h1>
        <h1>{props.climate}</h1>
        <h1>{props.residents.map(resident => resident.name)}</h1>
        <button onClick={() => props.handleFavorites(props)}>favorite</button>
      </div>
    );
  }
  if (props.passengers) {
    return (
      <div>
        <h1>{props.name}</h1>
        <h1>{props.model}</h1>
        <h1>{props.class}</h1>
        <h1>{props.passengers}</h1>
        <button onClick={() => props.handleFavorites(props)}>favorite</button>
      </div>
    );
  }
  return <div />;
};

export default Card;
