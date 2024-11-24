import React from "react";
import './Card.css'
import { useState } from 'react';

const Card = ({vegimage,vegname,price,location,isAltStyle,onAddToCart}) => {
    const [quantity, setQuantity] = useState(1);
    const handleAddToCart = () => {
        const item = {
            vegname,
            quantity,
            price
        };
        onAddToCart(item);
        console.log('onAddToCart in Card:', onAddToCart);
    }
    return(
        <div className={isAltStyle ? 'card alt-style' : 'card'}>
            <div className={isAltStyle ? 'image alt-style' : 'image'}>
                <img src={vegimage}/>
            </div>
            <div className={isAltStyle ? 'info alt-style' : 'info'}>
                <div className="info-1">
                <p className="veg_name">{vegname}</p>
                <p className="price">₹{price}/kg</p>
                <p className="location">{location}</p>
                <label>
                    Quantity : 
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5].map((kg) => (
                        <option key={kg} value={kg}>
                          {kg} kg
                        </option>
                      ))}
                    </select>
                </label>
                </div>
                <div className="atc">
                    <button onClick={handleAddToCart}>+</button>
                </div>
            </div>
        </div>
    )
}
export default Card