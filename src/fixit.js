import { fetchData } from './fetch-helper';



export const getOpeningScroll = async () => {
  const url = 'https://swapi.co/api/films/'
  const response = await fetch(url);
  const data = await response.json();
  return scroll(data)
}
export const getNumber = () => {
  return Math.floor(Math.random() * 7 + 1)
}
export const scroll = (data) => {
  const scrollInfo = data.results.reduce((scrollInfo, film) => {
    if (film.episode_id === getNumber()) {
      scrollInfo = {
        title: film.title,
        releaseDate: film.release_date,
        scrollText: film.opening_crawl,
      }
    }
    return scrollInfo;
  }, {});
  return scrollInfo;
}
export const people = async (data) => {
  const people = data.results
  const cleanPeople = people.map(person => cleanPerson(person))
  return Promise.all(cleanPeople)
}
// export const cleanPerson = async (person) => {
//   const cleanHomeworld = await fetchHomeworld(person.homeworld)
//   const cleanSpecies = await fetchSpecies(person.species)
//   const card = makePersonCard({ ...person, homeworld: cleanHomeworld, species: cleanSpecies })
//   console.log(card)
//   return await card
// }
// export const makePersonCard = (person) => {
//   return {
//     name: person.name,
//     homeworld: person.homeworld.name,
//     species: person.species.name,
//     population: person.homeworld.population,
//     favorite: false
//   }
// }
// export const fetchHomeworld = async (homeworld) => {
//   const response = await fetch(homeworld)
//   const data = await response.json();
//   return data;
// }
// export const fetchSpecies = async (species) => {
//   const response = await fetch(species)
//   const data = await response.json();
//   return data;
// }










export const planets = async (data) => {
  const planets = data.results
  const cleanPlanets = planets.map(planet => cleanPlanet(planet))
  return Promise.all(cleanPlanets);
}
const cleanPlanet = async (planet) => {
  const cleanResidents = await fetchResidents(planet.residents)
  return { ...planet, residents: cleanResidents }
}
const fetchResidents = (residents) => {
  const residentNames = residents.map(async resident => {
    const response = await fetch(resident);
    return await response.json();
  })
  return Promise.all(residentNames)
}











export const vehicles = (data) => {
  const vehicles = data.results
  const cleanVehicles = vehicles.map(vehicle => makeVehicleCard(vehicle))
  return Promise.all(cleanVehicles)
}
export const makeVehicleCard = (vehicle) => {
  return {
    name: vehicle.name,
    model: vehicle.model,
    vehicleClass: vehicle.vehicle_class,
    numberOfPassengers: parseInt(vehicle.crew, 10) + parseInt(vehicle.passengers, 10),
    favorite: false
  }
}


Add CommentCollapse

Message Input

Message @Jeremiah Stanley 