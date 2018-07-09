import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export const Buttons = ({ getPeople, getPlanets, getVehicles }) => {
  return (
    <div className="buttons-container">
      <button className="buttons" onClick={() => getPeople()}>
        People
      </button>
      <button className="buttons" onClick={() => getPlanets()}>
        Planets
      </button>
      <button className="buttons" onClick={() => getVehicles()}>
        Vehicle
      </button>
    </div>
  );
};

Buttons.propTypes = {
  getPeople: PropTypes.func,
  getPlanets: PropTypes.func,
  getVehicles: PropTypes.func
};
