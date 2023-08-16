import React from "react";
import { Link } from "react-router-dom";
import "./generalInfo.css";

const GeneralInfo: React.FC = () => {
  return (
    <div className="generalInfoContainer">
      <h1>About Google Developer Student Clubs (GDSC)</h1>
      <p className="description">
        Google Developer Student Clubs (GDSC) are community groups for college
        and university students interested in Google developer technologies. By
        joining a GDSC, students get access to a range of Google developer
        resources, and can learn from one another while working on real
        projects.
      </p>
      <div className="highlights">
        <div className="highlight">
          <h2>Hands-on Learning</h2>
          <p>
            GDSCs are a space for students to learn and grow their skills in
            areas such as Android development, web development, machine
            learning, and more. Through workshops, study jams, and coding
            challenges, students get hands-on experience with Google
            technologies.
          </p>
        </div>
        <div className="highlight">
          <h2>Community Building</h2>
          <p>
            GDSCs are not just about coding; they are about creating a strong
            community of like-minded students. GDSCs organize regular meetups,
            networking events, and hackathons to foster collaboration and
            friendship among members.
          </p>
        </div>
        <div className="highlight">
          <h2>Industry Connections</h2>
          <p>
            GDSCs often collaborate with industry experts and professionals,
            giving students opportunities to interact with and learn from the
            best in the field. This helps students build valuable connections
            and gain insights into the tech industry.
          </p>
        </div>
      </div>

      {/* Back button */}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default GeneralInfo;
