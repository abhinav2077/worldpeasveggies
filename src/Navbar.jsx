import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar({cart}){
    return(
        <div className="nav">
            <p>WorldPeas</p>
            <div className="Rightsection">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/whoweare">Who we are</Link>
            <Link className="link" to="/shop">Shop</Link>
            <Link className="link" to="/basket"><button className="btn">Basket ({cart.length}) {/* Show number of items in the cart */}</button></Link>
            </div> 
        </div>
    )
}

export default Navbar