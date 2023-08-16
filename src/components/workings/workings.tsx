import React from "react";
import "./workings.css"; // Import the CSS file

// Import the images for the sections
import Poverty from "./poverty.jpg";
import Hunger from "./hunger.jpg";
import Wellbeing from "./wellbeing.jpg";
import Education from "./education.jpg";
import Gender from "./genderEquality.jpg";
import CleanWater from "./cleanWater.jpg";

const Workings: React.FC = () => {
  return (
    <div className="workings">
      <h1>What should you be working on</h1>
      <p className="description">
        Build a solution to a local problem using Google technologies, in
        accordance with one or more of the United Nations 17 Sustainable
        Development Goals.
      </p>
      <div className="row">
        <div className="section">
          <img src={Poverty} alt="Poverty" />
          <h2>No Poverty</h2>
          <p>
            End poverty in all forms,everywhere.This goal aims to eradicate
            extreme poverty and reduce overall poverty levels worldwide by 2030.
          </p>
        </div>
        <div className="section">
          <img src={Hunger} alt="Hunger" />
          <h2>Zero Hunger</h2>
          <p>
            This goals aims to end hunger, achieve food security, improved
            nutrition among different nations, and promote sustainable
            agriculture by 2030.
          </p>
        </div>
        <div className="section">
          <img src={Wellbeing} alt="Wellbeing" />
          <h2>Good Health and Wellbeing</h2>
          <p>
            Ensure healthy lives and promote well-being for all, at all ages.It
            recognizes the importance of access to quality healthcare, safe and
            nutrious food, clean water, and sanitation
          </p>
        </div>
        <div className="section">
          <img src={Education} alt="Quality Education" />
          <h2>Quality Education</h2>
          <p>
            It ensure inclusive and equitable quality education and promote
            lifelong learning opportunities for all, recognizes the
            transformative power of education to break the cycle of poverty.
          </p>
        </div>
        <div className="section">
          <img src={Gender} alt="Gender" />
          <h2>Gender Equality</h2>
          <p>
            Achieve gender equality and empower all women and girls.It
            recognizes that gender inequality is a root cause of poverty and
            social injustice and that empowering women and girls is essential
            for sustainable development.
          </p>
        </div>
        <div className="section">
          <img src={CleanWater} alt="Clean Water" />
          <h2>Clean Water and sanitation</h2>
          <p>
            Ensure availability and sustainable management of water and
            sanitation for all human beings, which is a basic human right and
            essential for human health and environmental sustainability
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workings;
