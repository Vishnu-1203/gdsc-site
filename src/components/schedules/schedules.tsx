import React, { useState } from "react";
import "./scheduleStyles.css";

const Schedules: React.FC = () => {
  const [activeTab, setActiveTab] = useState("online"); // State to track active tab

  return (
    <div className="schedules">
      <h1>Event Schedule</h1>
      <div className="tabs">
        <div
          className={`tab ${activeTab === "online" ? "active" : ""}`}
          onClick={() => setActiveTab("online")}
        >
          Online Events
        </div>
        <div
          className={`tab ${activeTab === "offline" ? "active" : ""}`}
          onClick={() => setActiveTab("offline")}
        >
          Offline Events
        </div>
      </div>
      {activeTab === "online" ? (
        <div className="onlineSchedules">
          {/* Sample online events */}
          <div className="event">
            <h3>ONLINE REGISTRATION STARTS</h3>
            <p>
              Hackathon will be inaugurated by Dr. Jose P. Therattil, Principal
              of Jyothi Engineering College, Thrissur.
            </p>
            <div className="event-timings">16th March 2023, 09:30 AM</div>
          </div>
          <div className="event">
            <h3>ONLINE SESSION OF HACKATHON STARTS</h3>
            <p>
              Inaugural Ceremony will be hosted through a Google Meet.
              Participants can join through the meet, and start to work on their
              project. They should be active within intervals to mark the
              attendance.
            </p>
            <div className="event-timings">16th March 2023, 10:00 AM</div>
          </div>
        </div>
      ) : (
        <div className="offlineSchedules">
          {/* Sample offline events */}
          <div className="event">
            <h3>CODING COMPETITION</h3>
            <p>
              Participate in our offline coding competition and showcase your
              coding skills. Win exciting prizes and get recognized by industry
              experts.
            </p>
            <div className="event-timings">
              17th March 2023, 11:00 AM - 2:00 PM
            </div>
          </div>
          <div className="event">
            <h3>WORKSHOP ON MOBILE APP DEVELOPMENT</h3>
            <p>
              Join our hands-on workshop on mobile app development and learn how
              to build amazing apps for Android and iOS platforms.
            </p>
            <div className="event-timings">
              18th March 2023, 3:00 PM - 6:00 PM
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedules;
