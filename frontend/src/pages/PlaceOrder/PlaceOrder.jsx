import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css';
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className='place_order'>
      <div className='place_order_left'>
        <p className='title'>Delivery Information</p>
        <div className='multi_fields'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type='email' placeholder='Email' />
        <input type='text' placeholder='Street' />
        <div className='multi_fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className='multi_fields'>
          <input type='text' placeholder='Country' />
          <input type='text' placeholder='Zip Code' />
        </div>
        <input type='text' placeholder='Phone Number' />
      </div>
      <div className='place_order_right'>
        <div className="cart_total">
          <h3>Total</h3>
          <div className="">
            <div className="cart_total_detail">
              <p>Subtotal</p>
              ${getTotalCartAmount()}
            </div> <hr />
            <div className="cart_total_detail">
              <p>Delivery Fee</p>
              ${2}
            </div> <hr />
            <div className="cart_total_detail">
              <p>Total</p>
              ${getTotalCartAmount() + 2}
            </div>
          </div>

          <div className="cart_checkout">
            <button onClick={() => { }}>Procedd To Payment</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder