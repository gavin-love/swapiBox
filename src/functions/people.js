const allPeople = async data => {
  const mapPeople = data.map(person => HomeAndSpecies(person));
  return Promise.all(mapPeople);
};

const HomeAndSpecies = async person => {
  const homeworld = await homeworldFetch(person.homeworld);
  const species = await speciesFetch(person.species);
  const newPeople = createPerson({
    ...person,
    homeworld,
    species
  });
  return await newPeople;
};

const homeworldFetch = async homeworld => {
  const response = await fetch(homeworld);
  const data = await response.json();
  return data;
};

const speciesFetch = async species => {
  const response = await fetch(species);
  const data = await response.json();
  return data;
};

export const createPerson = person => {
  return {
    name: person.name,
    homeworld: person.homeworld.name,
    species: person.species.name,
    population: person.homeworld.population,
    favorite: false
  };
};
export default allPeople;
