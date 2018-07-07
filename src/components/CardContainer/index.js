import React from "react";
import Card from "../Card";

const CardContainer = ({ cards, handleFavorites }) => {
  const card = cards.map((item, index) => {
    return <Card info={item} key={index} handleFavorites={handleFavorites} />;
  });
  return <div className="card-container">{card}</div>;
};

export default CardContainer;
