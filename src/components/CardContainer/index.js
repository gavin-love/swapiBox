import React from "react";
import Card from "../Card";
import "./index.css";
import PropTypes from "prop-types";

const CardContainer = ({ cards, getFavorites }) => {
  const card = cards.display.map((item, index) => {
    return <Card info={item} key={index} getFavorites={getFavorites} />;
  });
  return <div className="card-container">{card}</div>;
};

CardContainer.propTypes = {
  cards: PropTypes.object,
  getFavorites: PropTypes.func
};

export default CardContainer;
