
import React from "react";
import "./Checkout.css";

const Checkout = ({ cart, cartTotal, setCart }) => {
  const handlePlaceOrder = () => {
    alert("🎉 Order placed successfully!");
    setCart([]); // ✅ clear the cart
  };

  return (
    <div className="checkout-page">
      <h2>🧾 Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Please add some food first.</p>
      ) : (
        <div className="checkout-box">
          <ul className="checkout-list">
            {cart.map((item, index) => (
              <li key={index} className="checkout-item">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{cartTotal}</h3>
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            ✅ Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
