import React from "react";
import './Home.css';
import Shop from './Shop.jsx';
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home">
        <div className="home_center">
            <p>We’re <span>farmers, purveyors,</span> and <span>eaters</span> of <br></br>organically grown food.</p>
        </div>
        <Link className="link" to="/shop"><button className="home_btn">Browse our shop</button></Link>
        </div>
    )
}
export default Home