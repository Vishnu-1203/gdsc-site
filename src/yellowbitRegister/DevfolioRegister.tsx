import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./yellowRegister.css";

const DevfolioRegister: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic registration validation (example)
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // Registration successful, navigate to the home page
      navigate("/");
    }
  };

  const handleBackClick = () => {
    // Navigate back to the initial home page
    navigate("/");
  };

  return (
    <div className="devfolio-register-container">
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
      <h1>Register with Devfolio</h1>
      <form className="devfolio-register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
};

export default DevfolioRegister;
