import ApiFetchDataCleaner from "../ApiFetchDataCleaner/index.js";

describe("ApiFetchDataCleaner", () => {
  describe("allFilms", () => {
    let fetchData;
    let mockResponse;
    let mockFunction;

    beforeEach(() => {
      fetchData = new ApiFetchDataCleaner();
      mockFunction = jest.fn();
      mockResponse = {
        results: [
          {
            title: "this is crazy hard",
            opening_crawl: "y tho?",
            release_date: "june 16, 2042",
            residents: [{}, {}, {}]
          }
        ]
      };

      window.fetch = mockFunction.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      );
    });

    it("should call fetch with the correct params", async () => {
      const expected = `https://swapi.co/api/films`;

      await fetchData.allFilms();

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
  });

  //all people//

  describe("allPeople", () => {
    let fetchData;
    let mockResponse;
    let mockFunction;

    beforeEach(() => {
      fetchData = new ApiFetchDataCleaner();
      mockFunction = jest.fn();
      mockResponse = {
        results: [
          {
            title: "this is crazy hard",
            opening_crawl: "y tho?",
            release_date: "june 16, 2042",
            residents: [{}, {}, {}]
          }
        ]
      };

      window.fetch = mockFunction.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      );
    });

    it("should call fetch with the correct params", async () => {
      const expected = `https://swapi.co/api/people`;

      await fetchData.allPeople();

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
  });

  describe("homeworldFetch", () => {
    let fetchData;
    let mockResponse;
    let mockFunction;

    beforeEach(() => {
      fetchData = new ApiFetchDataCleaner();
      mockFunction = jest.fn();
      mockResponse = { name: "China", population: "20,000,000,000,000" };

      window.fetch = mockFunction.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      );
    });

    it("should call fetch with the correct params", async () => {
      const expected = `url`;

      await fetchData.homeworldFetch(expected);

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
  });

  describe("speciesFetch", () => {
    let fetchData;
    let mockResponse;
    let mockFunction;

    beforeEach(() => {
      fetchData = new ApiFetchDataCleaner();
      mockFunction = jest.fn();
      mockResponse = { name: "lizard" };

      window.fetch = mockFunction.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      );
    });

    it("should call fetch with the correct params", async () => {
      const expected = `url`;

      await fetchData.speciesFetch(expected);

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
  });

  describe("createPerson", () => {
    let fetchData;

    beforeEach(() => {
      fetchData = new ApiFetchDataCleaner();
    });

    it.skip("should call createPerson with the correct params", async () => {
      const expected = {
        name: "Gavin",
        homeworld: { name: "finite", population: "10" },
        species: { name: "snake" }
      };

      expect(fetchData.createPerson(expected)).toHaveBeenCalled();
    });
  });

  //all planets//

  describe("allPlanets", () => {
    let fetchData;
    let mockResponse;
    let mockFunction;

    beforeEach(() => {
      fetchData = new ApiFetchDataCleaner();
      mockFunction = jest.fn();
      mockResponse = {
        results: [
          {
            title: "this is crazy hard",
            opening_crawl: "y tho?",
            release_date: "june 16, 2042",
            residents: [{}, {}, {}]
          }
        ]
      };

      window.fetch = mockFunction.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      );
    });

    it("should call fetch with the correct params", async () => {
      const expected = `https://swapi.co/api/planets`;

      await fetchData.allPlanets();

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
  });

  describe("residentsFetch", () => {
    let fetchData;
    let mockResponse;
    let mockFunction;

    beforeEach(() => {
      fetchData = new ApiFetchDataCleaner();
      mockFunction = jest.fn();
      mockResponse = { name: "lizard" };

      window.fetch = mockFunction.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      );
    });

    it("should call fetch with the correct params", async () => {
      const expected = ["url"];

      await fetchData.residentsFetch(expected);

      expect(window.fetch).toHaveBeenCalledWith("url");
    });
  });

  //all vehicles//

  describe("allVehicles", () => {
    let fetchData;
    let mockResponse;
    let mockFunction;

    beforeEach(() => {
      fetchData = new ApiFetchDataCleaner();
      mockFunction = jest.fn();
      mockResponse = {
        results: [
          {
            title: "this is crazy hard",
            opening_crawl: "y tho?",
            release_date: "june 16, 2042",
            residents: [{}, {}, {}]
          }
        ]
      };

      window.fetch = mockFunction.mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      );
    });

    it("should call fetch with the correct params", async () => {
      const expected = `https://swapi.co/api/vehicles`;

      await fetchData.allVehicles();

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });
  });
});
