import React from "react";

export const Buttons = ({ handleSubmit }) => {
  return (
    <div>
      <button onClick={() => handleSubmit("people")}>People</button>
      <button onClick={() => handleSubmit("planets")}>Planets</button>
      <button onClick={() => handleSubmit("vehicles")}>Vehicle</button>
    </div>
  );
};
