import React from "react";
import Slider from "../Main/Slider/Slider";
import Category from "./Category/Category";
import Collection from "./Collection/Collection";
import Banner from "./Banner/Banner";
import Trend from "./Trend/Trend";
import Benefits from "./Benefits/Benefits";
import Insta from "./Insta/Insta";

const Main = () => {
  return (
    <div className="main">
      <Slider />
      <Category />
      <Collection />
      <Banner />
      <Trend />
      <Benefits />
      <Insta />
    </div>
  );
};

export default Main;
