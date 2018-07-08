import React from "react";

const Card = ({ info, getFavorites }) => {
  if (info.homeworld) {
    return (
      <div>
        <h1>{info.name}</h1>
        <h1>{info.homeworld}</h1>
        <h1>{info.species}</h1>
        <h1>{info.population}</h1>
        <button onClick={() => getFavorites(info)}>favorite</button>
      </div>
    );
  }

  if (info.terrain) {
    return (
      <div>
        <h1>{info.name}</h1>
        <h1>{info.terrain}</h1>
        <h1>{info.population}</h1>
        <h1>{info.climate}</h1>
        <h1>{info.residents.map(resident => resident.name)}</h1>
        <button onClick={() => getFavorites(info)}>favorite</button>
      </div>
    );
  }
  if (info.passengers) {
    return (
      <div>
        <h1>{info.name}</h1>
        <h1>{info.model}</h1>
        <h1>{info.class}</h1>
        <h1>{info.passengers}</h1>
        <button onClick={() => getFavorites(info)}>favorite</button>
      </div>
    );
  }
  return <div />;
};

export default Card;
