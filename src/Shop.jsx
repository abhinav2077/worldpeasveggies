import React from "react";
import Card from "./components/Card";
import tomato from './tomato.jpg';
import ginger from './ginger.jpg';
import onion from './onion.jpg';
import { useState } from "react";
import './Shop.css';

const items = [
    { id: 1, vegname:'Heirloom tomato', price: 100, location: 'Grown in San Juan Capistrano, CA', className: 'tomato',image: `${tomato}` },
    { id: 2, vegname: 'Organic Ginger', price: 150, location: 'Grown in Huntington beach, CA', className: 'ginger',image : `${ginger}` },
    { id: 3, vegname: 'Organic Onion', price: 50, location: 'Grown in hersberg, Italy', className: 'onion' , image : `${onion}` },
  ];

const Shop = ({onAddToCart}) => {

    const[isAltStyle,setIstAltStyle] = useState(false);

    const toggleStyle = () => {
        setIstAltStyle(true);
    }
    const resetStyle = () => {
        setIstAltStyle(false);
    }

    const [viewChange , setViewChange] = useState(true);

    return(
        <div className="shop">
            <div className="shop_header">
                <div className="header_left">
                    <p className="produce">Produce</p>
                    <p className="fresh">Fresh - </p>
                    <p className="date">&nbsp;October 9, 2024</p>
                </div>
                <div className="header_right">
                    <button className="default" onClick={()=>{setViewChange(true); resetStyle()}}>Default</button>
                    <button className="listview" onClick={() => {setViewChange(false); toggleStyle()}}>List view</button>
                </div>
            </div>
            <div className="line"></div>
            <div className="shop-container" style={{ display: 'flex', flexDirection: viewChange  ? 'row' : 'column'}}>
                {items.map((item,index) => (
                    <div className="cards" >
                    <Card 
                      key={item.id}
                      isAltStyle={isAltStyle}
                      vegimage={item.image} 
                      vegname={item.vegname}
                      price={item.price} 
                      location={item.location}
                      onAddToCart={onAddToCart}
                    />
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Shop