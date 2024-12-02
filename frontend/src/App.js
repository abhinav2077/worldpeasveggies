import Home from './Home.jsx';
import React, { useState } from 'react';
import Whoweare from './Whoweare.jsx';
import Shop from './Shop.jsx';
import Basket from './Basket.jsx';
import Myaccount from './Myaccount.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Navbar from './Navbar.jsx';
import RefreshHandler from './RefreshHandler.js';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();


  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.vegname === item.vegname);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.vegname === item.vegname
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.vegname === item.vegname
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0) 
    );
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  const noNavbarRoutes = ['/login', '/signup'];

  return (
    <div className="App">
      {!noNavbarRoutes.includes(location.pathname) && <Navbar cart={cart} />}
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/whoweare" element={<Whoweare />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route
          path="/shop"
          element={<Shop onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/basket"
          element={
            <Basket cart={cart} onRemoveFromCart={handleRemoveFromCart} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;