import React from "react";
import { Card } from "../Card";

export const AsideContainer = props => {
  const { films } = props.state;
  const randomNumber = Math.floor(Math.random() * 6);
  const film = films[randomNumber];

  return (
    <div>hello</div>
    // <Card
    //   tile={film.title}
    //   release={film.releaseDate}
    //   crawl={film.openingCrawl}
    // />
  );
};
