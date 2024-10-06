import React from "react";
import "./Banner.css";
import bannerData from "../../../Data/Banner.json";

const Banner = () => {
  return (
    <div className="banner">
      <div className="row-wrapper">
        {bannerData.map((box) => (
          <div
            className="box"
            key={box.id}
            style={{ backgroundImage: `url(${require(`../../../assets/${box.background}`)})` }}
          >
            <div className="content">
              <h2>{box.title}</h2>
              <p>{box.description}</p>
              <a href={box.link}>Shop Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;