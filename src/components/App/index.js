import React, { Component } from "react";
import "./index.css";
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
    this.api = new ApiFetchDataCleaner();
  }

  async componentDidMount() {
    const films = await this.api.allFilms();
    const randomNumber = Math.floor(Math.random() * 6);
    const film = films[randomNumber];
    this.setState({ film });
  }

  getPeople = async () => {
    if (!this.state.people.length) {
      const people = await this.api.allPeople();
      this.setState({ people });
    }
    this.setDisplay("people");
  };

  getPlanets = async () => {
    if (!this.state.planets.length) {
      const planets = await this.api.allPlanets();
      this.setState({ planets });
    }
    this.setDisplay("planets");
  };

  getVehicles = async () => {
    if (!this.state.vehicles.length) {
      const vehicles = await this.api.allVehicles();
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

  displayFavorites = () => {
    this.setState({
      display: this.state.favorites
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
        <Buttons
          getPeople={this.getPeople}
          getPlanets={this.getPlanets}
          getVehicles={this.getVehicles}
        />
        <aside>
          <AsideContainer film={this.state.film} />
          <CardContainer cards={this.state} getFavorites={this.getFavorites} />
        </aside>
      </div>
    );
  }
}

export default App;
