import allFilms from "./functions/films";
import allPeople from "./functions/people";
import allPlanets from "./functions/planets";
import allVehicles from "./functions/vehicles";

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
