import React from "react";

export const Buttons = ({ getPeople, getPlanets, getVehicles }) => {
  return (
    <div>
      <button className="people-button" onClick={() => getPeople()}>
        People
      </button>
      <button className="planets-button" onClick={() => getPlanets()}>
        Planets
      </button>
      <button className="vehicles-button" onClick={() => getVehicles()}>
        Vehicle
      </button>
    </div>
  );
};
