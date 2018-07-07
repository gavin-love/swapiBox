import React from "react";
import Card from "../Card";

const CardContainer = props => {
  if (props.data.selected === "people") {
    const people = props.data.people.map((person, index) => {
      return (
        <Card
          name={person.name}
          homeworld={person.homeworld}
          species={person.species}
          population={person.population}
          favorite={person.favorite}
          key={index}
          handleFavorites={props.handleFavorites}
        />
      );
    });
    return <div className="card-container">{people}</div>;
  }

  if (props.data.selected === "planets") {
    const planets = props.data.planets.map((planet, index) => {
      return (
        <Card
          name={planet.name}
          terrain={planet.terrain}
          population={planet.population}
          climate={planet.climate}
          residents={planet.residents}
          favorite={planet.favorite}
          key={index}
          handleFavorites={props.handleFavorites}
        />
      );
    });
    return <div className="card-container">{planets}</div>;
  }

  if (props.data.selected === "vehicles") {
    const vehicles = props.data.vehicles.map((vehicle, index) => {
      return (
        <Card
          name={vehicle.name}
          model={vehicle.model}
          class={vehicle.clAss}
          passengers={vehicle.passengers}
          favorite={vehicle.favorite}
          key={index}
          handleFavorites={props.handleFavorites}
        />
      );
    });
    return <div className="card-container">{vehicles}</div>;
  }

  return <div />;
};

export default CardContainer;
