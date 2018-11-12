import React from "react";
import "./SearchBar.css";
import logo from "./logo-instagram.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <header className="searchbar-container">
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

      <div className="search-field">
        {/* <span className="searchIcon">
          <FontAwesomeIcon icon="search" />
        </span> */}
        <input type="text" placeholder="&#x1F50D; Search" />
      </div>

      <div className="icon-links">
        <FontAwesomeIcon icon={["far", "compass"]} size="2x" />
        <FontAwesomeIcon icon={["far", "heart"]} size="2x" />
        <FontAwesomeIcon icon={["far", "user"]} size="2x" />
      </div>
    </header>
  );
};

export default SearchBar;
