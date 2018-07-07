import React from "react";

export const AsideContainer = ({ film }) => {
  return (
    <div>
      <p>{film.openingCrawl}</p>
      <h2>{film.title}</h2>
      <h2>{film.releaseDate}</h2>
    </div>
  );
};
