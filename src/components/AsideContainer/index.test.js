import React from "react";
import { AsideContainer } from "./index.js";

describe("AsideContainer", () => {
  let wrapper;
  let mockData;

  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should return opening scroll when pass film", () => {
    mockData = {
      title: "A NEW HOPE",
      releaseDate: "1977-05-25",
      openingCrawl: "IT'S A WAR"
    };

    wrapper = <AsideContainer film={mockData} />;

    expect(wrapper).toMatchSnapshot();
  });
});
