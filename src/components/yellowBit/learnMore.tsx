// learnMore.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./yellowbitStyles.css";

const LearnMore: React.FC = () => {
  return (
    <div className="learnMoreContainer">
      <Link to="/general-info" className="learnMoreButton">
        LEARN MORE
      </Link>
    </div>
  );
};

export default LearnMore;
