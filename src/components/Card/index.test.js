import React from "react";
import Card from "./index.js";
import { shallow } from "enzyme";

describe("Card", () => {
  let wrapper;
  let mockData;

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should return a people card when passed an object with property of homeworld", () => {
    mockData = {
      name: "Luke Skywalker",
      homeworld: "Tatooine",
      species: "Human",
      population: "200000"
    };
    wrapper = shallow(<Card info={mockData} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should return a planets card when passed an object with a property of terrain", () => {
    mockData = {
      name: "Alderaan",
      terrain: "grasslands, mountains",
      population: "2000000000",
      climate: "temperate",
      residents: ["Leia Organa", "Bail Prestor Organa", "Raymus Antilles"]
    };

    wrapper = shallow(<Card info={mockData} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should return a vehicle card when passed an object with a property of passengers", () => {
    mockData = {
      name: "Sand Crawler",
      model: "Digger Crawler",
      class: "wheeled",
      passengers: "30"
    };

    wrapper = shallow(<Card info={mockData} />);

    expect(wrapper).toMatchSnapshot();
  });
});
