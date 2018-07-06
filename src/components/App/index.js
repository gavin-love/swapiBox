import React, { Component } from "react";
import "./index.css";
import { initialFetch } from "../../apiCalls.js";
import { Buttons } from "../navigationButtonContainer";
import { AsideContainer } from "../AsideContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      films: []
    };
  }

  openingCrawl = async url => {
    const films = await initialFetch(url);

    this.setState({
      films
    });
  };

  handleSubmit = async string => {
    switch (string) {
      case "people":
        const people = await initialFetch(
          `https://swapi.co/api/${string}`,
          string
        );
        this.setState({
          people
        });
        break;
      case "planets":
        const planets = await initialFetch(
          `https://swapi.co/api/${string}`,
          string
        );
        this.setState({
          planets
        });
        break;
      case "vehicles":
        const vehicles = await initialFetch(
          `https://swapi.co/api/${string}`,
          string
        );
        this.setState({
          vehicles
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
          <AsideContainer state={this.state} />
        </aside>
      </div>
    );
  }
  componentDidMount() {
    const url = "https://swapi.co/api/films";
    this.openingCrawl(url);
  }
}

export default App;
