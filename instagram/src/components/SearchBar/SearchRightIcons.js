import React from "react";
import heart from "../../assets/instagram-header-heart.png";
import compass from "../../assets/instagram-compass.png";

const SearchRightIcons = props => {
  return (
    <div>
      <img src={compass} alt="compass" />
      <img src={heart} alt="heart" />
    </div>
  );
};

export default SearchRightIcons;
