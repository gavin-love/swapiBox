class ApiFetchDataCleaner {
  allFilms = async () => {
    const url = `https://swapi.co/api/films`;
    const response = await fetch(url);
    const filmsData = await response.json();

    const films = filmsData.results.map(async film => {
      const title = film.title;
      const releaseDate = film.release_date;
      const openingCrawl = film.opening_crawl;

      return {
        title,
        releaseDate,
        openingCrawl
      };
    });
    const resolvedFilms = await Promise.all(films);
    return resolvedFilms;
  };

  ////people////

  allPeople = async () => {
    const url = `https://swapi.co/api/people`;
    const response = await fetch(url);
    const people = await response.json();

    const mapPeople = people.results.map(person => this.HomeAndSpecies(person));
    return Promise.all(mapPeople);
  };

  HomeAndSpecies = async person => {
    const homeworld = await this.homeworldFetch(person.homeworld);
    const species = await this.speciesFetch(person.species);
    const newPeople = this.createPerson({
      ...person,
      homeworld,
      species
    });
    return await newPeople;
  };

  homeworldFetch = async homeworld => {
    const response = await fetch(homeworld);
    const data = await response.json();
    return data;
  };

  speciesFetch = async species => {
    const response = await fetch(species);
    const data = await response.json();
    return data;
  };

  createPerson = person => {
    return {
      name: person.name,
      homeworld: person.homeworld.name,
      species: person.species.name,
      population: person.homeworld.population
    };
  };

  //planets///

  allPlanets = async () => {
    const url = `https://swapi.co/api/planets`;
    const response = await fetch(url);
    const planets = await response.json();

    const mapPlanets = planets.results.map(planet =>
      this.planetAndResidents(planet)
    );
    return Promise.all(mapPlanets);
  };

  planetAndResidents = async planet => {
    const residents = await this.residentsFetch(planet.residents);
    return { ...planet, residents };
  };

  residentsFetch = planetResidents => {
    const residents = planetResidents.map(async resident => {
      const response = await fetch(resident);
      return await response.json();
    });
    return Promise.all(residents);
  };

  //vehicles//

  allVehicles = async () => {
    const url = `https://swapi.co/api/vehicles`;
    const response = await fetch(url);
    const vehiclesData = await response.json();

    const vehicles = vehiclesData.results.map(async vehicle => {
      const name = vehicle.name;
      const model = vehicle.model;
      const clAss = vehicle.vehicle_class;
      const passengers = vehicle.passengers;

      return {
        name,
        model,
        clAss,
        passengers
      };
    });
    const resolvedVehicles = await Promise.all(vehicles);
    return resolvedVehicles;
  };
}

export default ApiFetchDataCleaner;
