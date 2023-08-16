import React from "react";
import "./yellowbitStyles.css";
import { Link } from "react-router-dom";

const Yellowbit: React.FC = () => {
  return (
    <div className="yellowbit">
      <h1 className="heading">Register Now</h1>
      <div className="sections">
        <div className="section">
          <h2>Using Devfolio</h2>
          <p>Register using your Devfolio account</p>
          <Link to="/register/devfolio" className="registerButton">
            Register Now
          </Link>
        </div>
        <div className="section">
          <h2>Be a GDSC JECC Member</h2>
          <p>Join our GDSC JECC community</p>
          <Link to="/register/gdsc" className="registerButton">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Yellowbit;
