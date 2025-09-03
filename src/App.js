
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const [foods, setFoods] = useState([
    { id: 1, name: "Pizza", price: 250, image: "/images/pizza.jpg" },
    { id: 2, name: "Burger", price: 120, image: "/images/burger.jpg" },
    { id: 3, name: "Pasta", price: 180, image: "/images/pasta.jpg" },
    { id: 4, name: "Fries", price: 80, image: "/images/fries.jpg" },
    { id: 5, name: "Salad", price: 150, image: "/images/salad.jpg" },
    { id: 6, name: "Sandwich", price: 100, image: "/images/sandwich.jpg" },
    { id: 7, name: "Sushi", price: 300, image: "/images/sushi.jpg" },
    { id: 8, name: "Noodles", price: 200, image: "/images/noodles.jpg" },
    { id: 9, name: "Ice Cream", price: 90, image: "/images/icecream.jpg" },
    { id: 10, name: "Coffee", price: 70, image: "/images/coffee.jpg" },
  ]);

  
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Router>
      <div className={darkMode ? "dark-theme" : "light-theme"}>
        
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          cartCount={cart.length}
          cartTotal={cartTotal}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        <Routes>
         
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Home foods={foods} addToCart={addToCart} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/menu"
            element={
              isLoggedIn ? (
                <Menu foods={foods} addToCart={addToCart} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/cart"
            element={
              isLoggedIn ? (
                <Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/admin"
            element={
              isLoggedIn ? (
                <Admin foods={foods} setFoods={setFoods} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/checkout"
            element={
              isLoggedIn ? (
                <Checkout cart={cart} cartTotal={cartTotal} setCart={setCart} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {/* ✅ Pass setIsLoggedIn into Login */}
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
