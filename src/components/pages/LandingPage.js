import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import BackgroundImage from "../../assets/images/cacheFlowLogo.png";

export default function LandingPage() {
  return (
    <header style={HeaderStyle}>
      <img src={BackgroundImage} alt="logo" className="landing-image"></img>
      <div className="landing-buttons text-center">
        <Link to="/login">
          <button className="primary-button">log in</button>
        </Link>
        <Link to="/register">
          <button className="primary-button" id="reg_btn">
            <span>register </span>
          </button>
        </Link>
      </div>
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
};
