
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <div className="cart-container">
          {cart.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={item.image} alt={item.name} className="cart-card-img" />
              <div className="cart-card-info">
                <h3>{item.name}</h3>
                <p className="price">₹{item.price} each</p>

                {/* Quantity Controls */}
                <div className="quantity-controls">
                  <button className="qty-btn" onClick={() => decreaseQuantity(index)}>-</button>
                  <span className="qty-value">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => increaseQuantity(index)}>+</button>
                </div>

                <p className="subtotal">
                  Subtotal: <strong>₹{item.price * item.quantity}</strong>
                </p>
              </div>

              {/* Remove button */}
              <button className="remove-btn" onClick={() => removeFromCart(index)}>
                ❌ Remove
              </button>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <button className="checkout-btn" onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
