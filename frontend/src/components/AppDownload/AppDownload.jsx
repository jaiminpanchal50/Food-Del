import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="appDownload" id="appDownload">
      <h2>
        For Better Experience Download <br /> Tomato App!
      </h2>
      <div className="app-download-plateform">
        <img src={assets.app_store} alt="playstore-icon" />
        <img src={assets.play_store} alt="appstore-icon" />
      </div>
    </div>
  );
};

export default AppDownload;
