
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; 
import Signup from "./pages/Signup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (name && email && password) {
      alert(`Account created for ${name} (${email}) ✅`);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login"); 
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>📝 Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Sign Up
          </button>
        </form>
        <Routes>
          <Route path="/signup" element={<Signup />} /> {/* ⬅️ new route */}
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>

        {/* ✅ back to login */}
        <p className="signup-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
