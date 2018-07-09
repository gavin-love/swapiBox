import React from "react";
import ReactDOM from "react-dom";
import ApiFetchDataCleaner from "../ApiFetchDataCleaner/index.js";
import App from "../App/index.js";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { runMain } from "module";

jest.mock("../ApiFetchDataCleaner/index.js", () => {
  return jest.fn().mockImplementation(() => {
    return {
      allFilms: jest
        .fn()
        .mockImplementation(() => Promise.resolve(["film", "film"])),
      allPeople: jest
        .fn()
        .mockImplementation(() => Promise.resolve(["people", "people"])),
      allVehicles: jest
        .fn()
        .mockImplementation(() => Promise.resolve(["vehicles", "vehicles"])),
      allPlanets: jest
        .fn()
        .mockImplementation(() => Promise.resolve(["planets", "planets"]))
    };
  });
});

describe("App", () => {
  describe("getPeople", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it("should call allPeople", async () => {
      wrapper.instance().getPeople();

      await expect(wrapper.instance().fetchData.allPeople).toHaveBeenCalled();
    });

    it("should set state when allPeople is called", () => {
      const expected = ["people", "people"];

      expect(wrapper.state("display")).toEqual([]);

      Promise.resolve(wrapper.instance().getPeople())
        .then(() => wrapper.update())
        .then(() => expect(wrapper.state("display")).toEqual(expected));
    });

    it("should not set state if there is already objects in state", async () => {
      wrapper.setState({
        people: [{}, {}, {}]
      });

      Promise.resolve(wrapper.instance().getPeople())
        .then(() => wrapper.update())
        .then(() =>
          expect(wrapper.instance().fetchData.allPeople).not.toHaveBeenCalled()
        );
    });
  });

  describe("getPlanets", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it("should call allPlanets", async () => {
      wrapper.instance().getPlanets();

      await expect(wrapper.instance().fetchData.allPlanets).toHaveBeenCalled();
    });

    it("should set state when allPlanets is called", () => {
      const expected = ["planets", "planets"];

      expect(wrapper.state("display")).toEqual([]);

      Promise.resolve(wrapper.instance().getPlanets())
        .then(() => wrapper.update())
        .then(() => expect(wrapper.state("display")).toEqual(expected));
    });

    it("should not set state if there is already objects in state", async () => {
      wrapper.setState({
        planets: [{}, {}, {}]
      });

      Promise.resolve(wrapper.instance().getPlanets())
        .then(() => wrapper.update())
        .then(() =>
          expect(wrapper.instance().fetchData.allPlanets).not.toHaveBeenCalled()
        );
    });
  });

  describe("getVehicles", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it("should call allVehicles", async () => {
      wrapper.instance().getVehicles();

      await expect(wrapper.instance().fetchData.allVehicles).toHaveBeenCalled();
    });

    it("should set state when allVehicles is called", () => {
      const expected = ["vehicles", "vehicles"];

      expect(wrapper.state("display")).toEqual([]);

      Promise.resolve(wrapper.instance().getVehicles())
        .then(() => wrapper.update())
        .then(() => expect(wrapper.state("display")).toEqual(expected));
    });

    it("should not set state if there is already objects in state", async () => {
      wrapper.setState({
        vehicles: [{}, {}, {}]
      });

      Promise.resolve(wrapper.instance().getVehicles())
        .then(() => wrapper.update())
        .then(() =>
          expect(
            wrapper.instance().fetchData.allVehicles
          ).not.toHaveBeenCalled()
        );
    });
  });

  describe("getFavorites", () => {
    let wrapper;
    let expected;

    beforeEach(() => {
      wrapper = shallow(<App />);
      expected = { planet: "hollywood", guest: 0, tired: "true" };
    });

    it("should add favorite to state of favorites if it does not already exist", () => {
      expect(wrapper.state("favorites")).toEqual([]);

      Promise.resolve(wrapper.instance().getFavorites(expected))
        .then(() => wrapper.update())
        .then(() => expect(wrapper.state("favorites")).toEqual([expected]));
    });

    it("should remove favorite from the state of favorites", () => {
      wrapper.setState({
        favorites: [expected]
      });

      expect(wrapper.state("favorites")).toEqual([expected]);

      Promise.resolve(wrapper.instance().getFavorites(expected))
        .then(() => wrapper.update())
        .then(() => expect(wrapper.state("favorites")).toEqual([]));
    });
  });
});
