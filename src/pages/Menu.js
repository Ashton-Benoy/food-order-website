
import React from "react";
import "./Menu.css";

const Menu = ({ foods, addToCart }) => {
  return (
    <div className="menu-page">
      <h2>🍽 Our Menu</h2>
      <p className="menu-subtitle">
        Explore our delicious range of meals and snacks!
      </p>

      <div className="menu-grid">
        {foods.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
