export const initialFetch = async (data, string) => {
  const response = await fetch(data);
  const result = await response.json();

  switch (string) {
    case "people":
      return allPeople(result.results);
    case "planets":
      return allPlanets(result.results);
    case "vehicles":
      return allVehicles(result.results);
    case undefined:
      return allFilms(result.results);
  }
};

const nestedFetch = async data => {
  const response = await fetch(data);
  const result = await response.json();

  return await Promise.resolve(result);
};

const allFilms = async data => {
  const films = data.map(async film => {
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

const allPeople = async data => {
  const people = data.map(async person => {
    const homeWorldFetch = await nestedFetch(person.homeworld);
    const speciesFetch = await nestedFetch(person.species);
    const name = person.name;
    const homeworld = homeWorldFetch.name;
    const species = speciesFetch.name;
    const population = homeWorldFetch.population;

    return {
      name,
      homeworld,
      population,
      species
    };
  });
  const resolvedPeople = await Promise.all(people);
  return resolvedPeople;
};

const allPlanets = async data => {
  const planets = data.map(async planet => {
    const name = planet.name;
    const terrain = planet.terrain;
    const population = planet.population;
    const climate = planet.climate;
    const residents = await mapResidents(planet.residents);

    return {
      name,
      terrain,
      population,
      climate,
      residents
    };
  });
  const resolvedPlanets = await Promise.all(planets);
  return resolvedPlanets;
};

const mapResidents = async data => {
  const residentsList = data;

  if (residentsList.length) {
    const residents = residentsList.map(async resident => {
      const fetchResidents = await nestedFetch(resident);
      const resolvedResidents = await Promise.resolve(fetchResidents.name);
      return resolvedResidents;
    });
    const resolvedPromise = await Promise.all(residents);
    return resolvedPromise;
  }
};

const allVehicles = async data => {
  console.log(data);
  const vehicles = data.map(async vehicle => {
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
