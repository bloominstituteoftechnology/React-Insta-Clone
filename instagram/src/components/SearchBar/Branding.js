import React from "react";
import "./SearchBar";
import logo from "./logo-instagram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Branding = () => {
  return (
    <div className="branding-container">
      <FontAwesomeIcon
        icon={["fab", "instagram"]}
        size="2x"
        className="camera-logo"
      />
      <div className="logo-container">
        <img className="logo" src={logo} alt="instagram typescript" />
      </div>
    </div>
  );
};

export default Branding;
