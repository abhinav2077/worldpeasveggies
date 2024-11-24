import Home from './Home.jsx';
import React, { useState } from 'react';
import Whoweare from './Whoweare.jsx';
import Shop from './Shop.jsx';
import Basket from './Basket.jsx';
import Navbar from './Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Add item to cart
  };

  return (
    <div className="App">
      <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoweare" element={<Whoweare />} />
        <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
        <Route path="/basket" element={<Basket cart={cart} />} />
      </Routes>
    </div>
  );
}

export default App;