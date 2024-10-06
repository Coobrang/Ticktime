import React from "react";
import "./Trend.css";
import trendData from "../../../Data/Trend.json";

const Trend = () => {
  return (
    <div className="trend">
    <div className="title">
      <h2>{trendData.title.name}</h2>
    </div>
    <div className="box-container">
      {trendData.trends.map((trend, index) => (
        <div className="box" key={index}>
          <div className="image">
            <a href={trend.link}>
              <img src={require(`../../../assets/${trend.image}`)} alt={trend.title} />
            </a>
            <div className="icons">
              <div className="wishlist">
                <a href={trend.wishlistLink}><i className="fa-regular fa-heart"></i></a>
              </div>
              <div className="compare">
                <a href={trend.compareLink}><i className="fa-solid fa-code-compare"></i></a>
              </div>
            </div>
            <div className="actions">
              <div className="quickview">
                <a href={trend.quickViewLink}>Quick View</a>
              </div>
              <div className="cart">
                <a href={trend.cartLink}>Quick Shop</a>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="name">
              <h3><a href={trend.link}>{trend.title}</a></h3>
            </div>
            <div className="price">
              <h5><span>$</span>{trend.price}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Trend;
