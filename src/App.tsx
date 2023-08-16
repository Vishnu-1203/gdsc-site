import React from "react";
import "./App.css";
import Bluebit from "./components/bluebit/bluebit";
import Events from "./components/events/events";
import Workings from "./components/workings/workings";
import LearnMore from "./components/yellowBit/learnMore";
import Yellowbit from "./components/yellowBit/yellowbit";
import Schedules from "./components/schedules/schedules";

const App = () => {
  return (
    <div className="app-container">
      <Bluebit />
      <Events />
      <Workings />
      <LearnMore />
      <Yellowbit />
      <Schedules />

      {/* Footer */}
      <footer className="footer">
        <p>® Created by Vishnudath M | All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
