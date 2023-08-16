import React from "react";
import { Link } from "react-router-dom";
import "./bluebit.css"; // Import the CSS file
import bluebitImage from "./bluebitImage.jpg";

const Bluebit: React.FC = () => {
  return (
    <div className="bluebit">
      <div className="textBit">
        <h1>
          <span className="red-text">S</span>
          <span className="yellow-text">o</span>
          <span className="green-text">l</span>
          <span className="blue-text">u</span>
          <span className="red-text">t</span>
          <span className="yellow-text">i</span>
          <span className="green-text">o</span>
          <span className="blue-text">n</span>
          <br />
          <span className="red-text">C</span>
          <span className="yellow-text">h</span>
          <span className="green-text">a</span>
          <span className="blue-text">l</span>
          <span className="red-text">l</span>
          <span className="yellow-text">e</span>
          <span className="green-text">n</span>
          <span className="blue-text">g</span>
          <span className="red-text">e</span>
        </h1>
        <p className="miniSol">Mini version of Solution Challenge</p>
        <p>
          <span className="mini-text">Conducted by GDSC JECC</span>
          <br />
          <span className="mini-text">
            20<sup>th</sup> and 21<sup>st</sup> March 2023
          </span>
        </p>
        <Link to="/register" className="registerButton">
          Register Now {" ->"}
        </Link>
      </div>
      <img src={bluebitImage} className="bluebitImage" alt="" />
    </div>
  );
};

export default Bluebit;
