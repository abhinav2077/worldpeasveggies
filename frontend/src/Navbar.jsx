import React, { useState } from "react";
import "./Navbar.css";
import menuicon from "./menu.jpg";
import closeicon from "./close.jpg";
import { Link } from "react-router-dom";

function Navbar({ cart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu's visibility
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when clicking a link
  };

  return (
    <div className="nav">
      <p>WorldPeas</p>
      <div className={`Rightsection ${isMenuOpen ? "show-menu" : ""}`}>
        <Link className="link" to="/home" onClick={closeMenu}>
          Home
        </Link>
        <Link className="link" to="/whoweare" onClick={closeMenu}>
          Who we are
        </Link>
        <Link className="link" to="/shop" onClick={closeMenu}>
          Shop
        </Link>
        <Link className="link" to="/myaccount" onClick={closeMenu}>
          Myaccount
        </Link>
        <Link className="link" to="/basket" onClick={closeMenu}>
          <button className="btn">
            Basket ({cart.length})
          </button>
        </Link>
      </div>
      <img
        src={isMenuOpen ? closeicon : menuicon} // Toggle between menu and close icons
        alt="Menu"
        className="hamburger"
        onClick={toggleMenu}
      />
    </div>
  );
}

export default Navbar;