const allPlanets = async data => {
  const mapPlanets = data.map(planet => planetAndResidents(planet));
  return Promise.all(mapPlanets);
};

const planetAndResidents = async planet => {
  const residents = await residentsFetch(planet.residents);
  return { ...planet, residents };
};

const residentsFetch = planetResidents => {
  const residents = planetResidents.map(async resident => {
    const response = await fetch(resident);
    return await response.json();
  });
  return Promise.all(residents);
};

export default allPlanets;
