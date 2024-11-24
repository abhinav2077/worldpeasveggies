import React from "react";
import './Basket.css';
import { Link } from "react-router-dom";

function Basket({ cart }) {
  
  const overallTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                </div>
                <div className="header_right">
                    
                </div>
            </div>
          <ul className="basket-list" style={{listStyleType:'none'}}>
            {cart.map((item, index) => (
              <li key={index} className="basket-item">
                    <div className="veggies">
                    <h3>{item.vegname}</h3>
                    <p>Quantity: {item.quantity} kg</p>
                    <p>Price: ₹{item.price}/kg</p>
                    <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
              </li>
            ))}
          </ul>
          <h3 className="overall-total">Overall Total: ₹{overallTotal.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Basket;