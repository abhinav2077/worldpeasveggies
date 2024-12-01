import React from "react";
import './Basket.css';
import { Link } from "react-router-dom";

function Basket({ cart, onRemoveFromCart }) {
  const overallTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="basket">
      {cart.length === 0 ? (
        <div className="center">
          <h3>Oops! Your basket is empty!</h3>
          <Link className="link" to="/shop">
            <button className="shopnow">Shop now</button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="shop_header">
            <div className="header_left">
              <p className="produce">Basket</p>
              <h3 className="overall-total">Overall Total: ₹{overallTotal.toFixed(2)}</h3>
            </div>
          </div>
          <div className="basket-line"></div>
          <div className="basketgrid">
            <div className="basket-container">
              {cart.map((item, index) => (
                <div key={index} className="basket-card">
                  <div className="basket-image">
                    <img src={item.vegimage} alt={item.vegname} />
                  </div>
                  <div className="basket-info">
                    <h3>{item.vegname}</h3>
                    <p>Quantity: {item.quantity} kg</p>
                    <p className="basket-price">Price: ₹{item.price}/kg</p>
                    <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                    <div className="rmb">
                      <button
                        className="remove-button"
                        onClick={() => onRemoveFromCart(item)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout">
              <div className="checkoutbox">
                <h1>Checkout</h1>
                <div className="checkoutlist">
                  {cart.map((item, index) => (
                    <div key={index} className="checkout-item">
                      <span className="item-name">{item.vegname}</span>
                      <span className="item-price">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="ordertotal">
                    <h3 className="overall-total">Overall Total: ₹{overallTotal.toFixed(2)}</h3>
                    <button className='paynowbtn' type='submit'>Pay now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>Eat Healthyyy!</p>
          </div>
        </div>
      )}
      
      
    </div>
  );
}

export default Basket;