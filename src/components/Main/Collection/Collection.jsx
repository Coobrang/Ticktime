import React from "react";
import "./Collection.css";
import collectionData from "../../../Data/Collection.json";

const Collection = () => {
  return (
    <div className="collection">
      <div className="title">
        <h2>{collectionData.title.name}</h2>
      </div>
      <div className="box-container">
        {collectionData.collections.map((collection, index) => (
          <div className="box" key={index}>
            <div className="image">
              <a href={collection.link}>
                <img src={require(`../../../assets/${collection.image}`)} alt={collection.title} />
              </a>
              <div className="icons">
                <div className="wishlist">
                  <a href={collection.wishlistLink}><i className="fa-regular fa-heart"></i></a>
                </div>
                <div className="compare">
                  <a href={collection.compareLink}><i className="fa-solid fa-code-compare"></i></a>
                </div>
              </div>
              <div className="actions">
                <div className="quickview">
                  <a href={collection.quickViewLink}>Quick View</a>
                </div>
                <div className="cart">
                  <a href={collection.cartLink}>Quick Shop</a>
                </div>
              </div>
            </div>
            <div className="info">
              <div className="name">
                <h3><a href={collection.link}>{collection.title}</a></h3>
              </div>
              <div className="price">
                <h5><span>$</span>{collection.price}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
