import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, i) => {
          console.log(category, item.category)
          {
            if (category === 'all' || category === item.category) {
              return (<FoodItem
                key={i}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                img={item.image}
              />
              )
            }
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
