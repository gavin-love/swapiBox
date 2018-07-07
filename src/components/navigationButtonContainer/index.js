import React from "react";

export const Buttons = ({ handleSubmit }) => {
  return (
    <div>
      <button className="people-button" onClick={() => handleSubmit("people")}>
        People
      </button>
      <button
        className="planets-button"
        onClick={() => handleSubmit("planets")}
      >
        Planets
      </button>
      <button
        className="vehicles-button"
        onClick={() => handleSubmit("vehicles")}
      >
        Vehicle
      </button>
    </div>
  );
};
