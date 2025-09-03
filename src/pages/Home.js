
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ foods, addToCart }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>🍴 Fresh & Tasty Food Delivered</h1>
        <p>Order your favorite meals and get them delivered hot and fresh!</p>
        <Link to="/menu">
          <button className="hero-btn">Explore Menu</button>
        </Link>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Popular Dishes</h2>
        <div className="product-container">
          {foods.slice(0, 4).map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
