import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => (
  <div className="search-bar">
    <div className="logos">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-glyph-logo-icon-png-black-white-300x300.png"
        alt="camera logo"
        className="camera-logo"
      />
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png-768x221.png"
        alt="instagram text logo"
        className="text-logo"
      />
    </div>
    <div className="search-text">
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" name="search bar" placeholder="Search" />
    </div>
    <div className="icons">
      <FontAwesomeIcon
        icon={faCompass}
        style={{ height: "25px", width: "25px" }}
      />
      <FontAwesomeIcon
        icon={faHeart}
        style={{ height: "25px", width: "25px" }}
      />
      <FontAwesomeIcon
        icon={faUser}
        style={{ height: "25px", width: "25px" }}
      />
    </div>
  </div>
);

export default SearchBar;
