import React, { Component } from "react";
import "./index.css";
import { initialFetch } from "../../apiCalls.js";
import { Buttons } from "../navigationButtonContainer";
import { AsideContainer } from "../AsideContainer";
import CardContainer from "../CardContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      film: [],
      favorites: []
    };
  }

  async componentDidMount() {
    const url = "https://swapi.co/api/films";
    const films = await initialFetch(url);
    const randomNumber = Math.floor(Math.random() * 6);
    const film = films[randomNumber];

    this.setState({
      film
    });
  }

  handleSubmit = async string => {
    switch (string) {
      case "people":
        const people = await initialFetch(
          `https://swapi.co/api/${string}`,
          string
        );
        this.setState({
          cards: people
        });
        break;
      case "planets":
        const planets = await initialFetch(
          `https://swapi.co/api/${string}`,
          string
        );
        this.setState({
          cards: planets
        });
        break;
      case "vehicles":
        const vehicles = await initialFetch(
          `https://swapi.co/api/${string}`,
          string
        );
        this.setState({
          cards: vehicles
        });
        break;
    }
  };

  handleFavorites = favorite => {
    const favorites = [...this.state.favorites, favorite];

    this.setState({
      favorites
    });
  };

  displayFavorites = () => {
    this.setState({
      cards: this.state.favorites
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SwapiBox</h1>
          <button onClick={() => this.displayFavorites()}>
            display favorites
          </button>
        </header>
        <Buttons handleSubmit={this.handleSubmit} />
        <aside>
          <AsideContainer film={this.state.film} />
          <CardContainer
            cards={this.state.cards}
            handleFavorites={this.handleFavorites}
          />
        </aside>
      </div>
    );
  }
}

export default App;
