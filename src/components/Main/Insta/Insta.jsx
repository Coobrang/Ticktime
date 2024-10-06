import React from "react";
import "./Insta.css";
import instaData from "../../../Data/Insta.json";

const Insta = () => {
  return (
    <div className="insta">
        <div className="box-container">
        {instaData.boxes.map((box, index) => (
        <div className="box" key={index}>
            <a href={box.link} className="over-link" target="_blank">
            <div className="image">
                <img src={require(`../../../assets/${box.image}`)} alt="" />
                <div className="overlay">
                <i className={box.iconClass}></i>
                </div>
            </div>
            </a>
        </div>
        ))}
        </div>
    </div>
  );
};

export default Insta;
