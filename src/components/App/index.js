import React, { Component } from "react";
import "./index.css";
import "../navigationButtonContainer/index.css";
import "../Card/index.css";
import { Buttons } from "../navigationButtonContainer";
import { AsideContainer } from "../AsideContainer";
import CardContainer from "../CardContainer";
import ApiFetchDataCleaner from "../ApiFetchDataCleaner";
class App extends Component {
  constructor() {
    super();
    this.state = {
      film: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      display: []
    };
    this.fetchData = new ApiFetchDataCleaner();
  }

  async componentDidMount() {
    const films = await this.fetchData.allFilms();
    const randomNumber = Math.floor(Math.random() * 6);
    const film = films[randomNumber];
    this.setState({ film });
  }

  getPeople = async () => {
    if (!this.state.people.length) {
      const people = await this.fetchData.allPeople();
      this.setState({ people });
    }
    this.setDisplay("people");
  };

  getPlanets = async () => {
    if (!this.state.planets.length) {
      const planets = await this.fetchData.allPlanets();
      this.setState({ planets });
    }
    this.setDisplay("planets");
  };

  getVehicles = async () => {
    if (!this.state.vehicles.length) {
      const vehicles = await this.fetchData.allVehicles();
      this.setState({ vehicles });
    }
    this.setDisplay("vehicles");
  };

  setDisplay = type => {
    this.setState({
      display: this.state[type]
    });
  };

  getFavorites = favorite => {
    let favorites = [...this.state.favorites];

    if (
      !favorites.find(favoriteInState => favoriteInState.name === favorite.name)
    ) {
      favorites = [...this.state.favorites, favorite];
    } else {
      favorites = favorites.filter(
        favoriteInState => favoriteInState.name !== favorite.name
      );
    }
    this.setState({ favorites });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SwapiBox</h1>
          <button onClick={() => this.setDisplay("favorites")}>
            display favorites
          </button>
        </header>
        <Buttons
          getPeople={this.getPeople}
          getPlanets={this.getPlanets}
          getVehicles={this.getVehicles}
        />
        <AsideContainer film={this.state.film} />
        <CardContainer cards={this.state} getFavorites={this.getFavorites} />
      </div>
    );
  }
}

export default App;
