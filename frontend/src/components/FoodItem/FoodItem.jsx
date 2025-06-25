import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
const FoodItem = ({ name, img, price, description }) => {
  return (
    <div className="food-item">
      <div className="image-container">
        <img src={img} alt="food-image" className="food-image" />
      </div>
      <div className="food-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="food-image" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
