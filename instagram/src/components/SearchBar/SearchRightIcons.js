import React from "react";
import heart from "../../assets/instagram-header-heart.png";
import compass from "../../assets/instagram-compass.png";

const SearchRightIcons = props => {
  return (
    <div className="header-right-section">
      <img src={compass} alt="compass" className="header-right-icons" />
      <img src={heart} alt="heart" className="header-right-icons" />
    </div>
  );
};

export default SearchRightIcons;
