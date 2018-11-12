import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="branding-container">
        <FontAwesomeIcon icon={["fab", "instagram"]} size="4x" />
        <img src="./logo-instagram.png" alt="instagram typescript" />
      </div>

      <div className="search-field">
        <span className="searchIcon">
          <FontAwesomeIcon icon="search" />
        </span>
        <input type="text" placeholder="Search" />
      </div>

      <div className="icon-links">
        <FontAwesomeIcon icon={["far", "compass"]} size="2x" />
        <FontAwesomeIcon icon={["far", "heart"]} size="2x" />
        <FontAwesomeIcon icon={["far", "user"]} size="2x" />
      </div>
    </div>
  );
};

export default SearchBar;
