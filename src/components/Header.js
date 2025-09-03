import React, { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes, FaMoon, FaSun, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Header({ darkMode, setDarkMode, cartCount, cartTotal, isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className={`navbar ${darkMode ? "dark" : ""}`}>
      {/* Left: Logo */}
      <div className="logo">
        <Link to="/">🍴 Foodie</Link>
      </div>

      {/* Center: Nav Links */}
      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      {/* Right: Actions */}
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>

        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}

        {/* Mobile menu */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Header;
