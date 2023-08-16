import React from "react";
import "./eventStyles.css";
import Person from "./person.jpg";
import Globe from "./globe.jpg";
import Comp from "./comp.jpg";
const Events: React.FC = () => {
  return (
    <div className="eventsPart">
      <p className="eventsTop">Why is this Event Super Cool?</p>
      <ul className="event">
        <div className="Section1">
          <img src={Person} className="" alt="" />
          <li className="imgTitle1"> for GDSC JECC Members</li>
          <li className="eventText1">
            The event is exclusively planned for students of Jyothi Engineering
            College.It wil be a great opportunity to showcase your skills out.
          </li>
        </div>
        <div className="Section2">
          <img src={Globe} className="" alt="" />
          <li className="imgTitle2">Get recommended</li>
          <li className="eventText2">
            The selected team will be recommended to the International google
            solution Challenge
          </li>
        </div>
        <div className="Section3">
          <img src={Comp} className="" alt="" />
          <li className="imgTitle3"> for GDSC JECC Members</li>
          <li className="eventText3">
            The event is exclusively planned for students of Jyothi Engineering
            College.It wil be a great opportunity to showcase your skills out.
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Events;
