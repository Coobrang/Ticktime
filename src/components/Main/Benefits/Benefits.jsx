import React from "react";
import "./Benefits.css";
import benefitsData from "../../../Data/Benefits.json";

const Benefits = () => {
  return (
    <div className="benefit">
        <div className="row-wrapper">
            {benefitsData.map((benefits) => (
            <div className="box" key={benefits.id}>
                <div className="icon">
                    <img src={require(`../../../assets/${benefits.icon}`)} alt={benefits.title} />
                </div>
                <div className="content">
                    <h4>{benefits.title}</h4>
                    <p>{benefits.description}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default Benefits;
