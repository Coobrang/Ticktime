import React from "react";
import "./Category.css";
import categoryData from "../../../Data/Category.json";

const Category = () => {
  return (
    <div className="category">
        <div className="row-container">
            {categoryData.categories.map((category, index) => (
                <a href={category.link} key={index}>
                    <div className="box">
                        <div className="image">
                            <img src={require(`../../../assets/${category.image}`)} alt={category.title} />
                        </div>
                        <div className="title">
                            <h4>{category.title} <span>({category.count})</span></h4>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </div>
  );
};

export default Category;