import React from "react";
import Card from "../Card";

const CardContainer = ({ cards, getFavorites }) => {
  const card = cards.display.map((item, index) => {
    return <Card info={item} key={index} getFavorites={getFavorites} />;
  });
  return <div className="card-container">{card}</div>;
};

export default CardContainer;
