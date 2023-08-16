import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneralInfo from "./webpages/generalInfo";
import Register from "./register/register";
import Yellowbit from "./components/yellowBit/yellowbit";
import DevfolioRegister from "./yellowbitRegister/DevfolioRegister";
import GdscRegister from "./yellowbitRegister/GdscRegister";

const root = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/general-info" element={<GeneralInfo />} />
      <Route path="/register" element={<Register />} />
      <Route path="/yellowbit" element={<Yellowbit />} />
      <Route path="/register/devfolio" element={<DevfolioRegister />} />
      <Route path="/register/gdsc" element={<GdscRegister />} />
    </Routes>
  </Router>,
  root
);
