import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css"; 
const Cart = () => {
  const { cartItem, removeItem, food_list } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list?.map((item, i) => {
          if (cartItem[item._id]) {
            return (
              <div key={i} className="cart-item">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>{item.price * cartItem[item._id]}</p>
                <button onClick={() => removeItem(item._id)}>Remove</button>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;
