import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, img, price, description }) => {
  const { cartItem, addToCart, removeItem } = useContext(StoreContext);

  return (
    <div className="food-item wow animate__animated animate__fadeIn animate__slow">
      <div className="image-container">
        <img src={img} alt="food-image" className="food-image" />
        {!cartItem[id] ? (
          <img
            src={assets.add_icon_white}
            alt="add-icon"
            className="add-icon" // Fixed: was "remove-image"
            onClick={() => addToCart(id)} // Fixed: Added missing onClick handler
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeItem(id)}
              src={assets.remove_icon_red}
              alt="remove-image"
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add-icon"
            />
          </div>
        )}
      </div>
      <div className="food-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating-stars" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
