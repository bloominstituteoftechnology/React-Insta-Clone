import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => (
  <div className="search-bar">
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
    <input type="text" name="search bar" placeholder="Search" />
    <FontAwesomeIcon icon={faCompass} />
    <FontAwesomeIcon icon={faHeart} />
    <FontAwesomeIcon icon={faUserCircle} />
  </div>
);

export default SearchBar;
