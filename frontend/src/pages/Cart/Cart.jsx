import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItem, removeItem, food_list, getTotalCartAmount } = useContext(StoreContext);
  const nevigate = useNavigate();

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
        <hr />
        <div className="cart-items-container">
          {food_list?.map((item, i) => {
            if (cartItem[item._id]) {
              return (
                <>
                  <div key={i} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>${item.price * cartItem[item._id]}</p>
                    <button onClick={() => removeItem(item._id)}>Remove</button>
                  </div>
                  <hr />
                </>

              );
            }
            return null;
          })}
        </div>
        <div className="cart_bottom">
          <div className="cart_total">
            <h3>Total</h3>
            <div className="">
              <div className="cart_total_detail">
                <p>Subtotal</p>
                ${getTotalCartAmount()}
              </div> <hr />
              <div className="cart_total_detail">
                <p>Delivery Fee</p>
                ${getTotalCartAmount() > 0 ? 2 : 0}
              </div> <hr />
              <div className="cart_total_detail">
                <p>Total</p>
                ${getTotalCartAmount() > 0 ? getTotalCartAmount() + 2 : 0}
              </div>
            </div>

            <div className="cart_checkout">
              <button onClick={() => { nevigate('/order') }}>Checkout</button>
            </div>
          </div>
          <div className="promo_code">
            <div className="">
              <p>Promo Code Enter here</p>
              <div className="promo_code_input">
                <input type="text" placeholder="Enter Promo Code" />
                <button>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
