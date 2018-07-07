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
      people: [],
      planets: [],
      vehicles: [],
      film: [],
      selected: ""
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
          people,
          selected: string
        });
        break;
      case "planets":
        const planets = await initialFetch(
          `https://swapi.co/api/${string}`,
          string
        );
        this.setState({
          planets,
          selected: string
        });
        break;
      case "vehicles":
        const vehicles = await initialFetch(
          `https://swapi.co/api/${string}`,
          string
        );
        this.setState({
          vehicles,
          selected: string
        });
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SwapiBox</h1>
        </header>
        <Buttons handleSubmit={this.handleSubmit} />
        <aside>
          <AsideContainer film={this.state.film} />
          <CardContainer data={this.state} />
        </aside>
      </div>
    );
  }
}

export default App;
