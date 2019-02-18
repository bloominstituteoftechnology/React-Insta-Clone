import React from "react";
import igLogo from "./igLogo.svg";
import igWordmark from "./igWordmark.png";
import igLikeIcon from "./igLikeIcon.svg";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div className="logo-set">
        <img src={igLogo} alt="instagram logo" className="logo" />
        <img src={igWordmark} alt="instagram wordmark" className="wordmark" />
      </div>
      <input type="text" placeholder="Search" className="search" />
      <div className="icon-set">
        <img src={igLikeIcon} alt="instagram like icon" className="like-icon" />
        <img src={igLikeIcon} alt="instagram like icon" className="like-icon" />
        <img src={igLikeIcon} alt="instagram like icon" className="like-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
