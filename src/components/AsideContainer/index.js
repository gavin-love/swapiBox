import React from "react";
import "./index.css";
import PropTypes from "prop-types";

export const AsideContainer = ({ film }) => {
  return (
    <div className="aside-container">
      <p>{film.openingCrawl}</p>
      <h2>{film.title}</h2>
      <h2>{film.releaseDate}</h2>
    </div>
  );
};

AsideContainer.propTypes = {
  film: PropTypes.object
};
