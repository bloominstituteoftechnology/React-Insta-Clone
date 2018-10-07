import React from "react";
import "./SearchBar.css";
import instaLogo from "../../assets/instagram.svg";
import compass from "../../assets/compass.svg";
import heart from "../../assets/heart.svg";
import user from "../../assets/user.svg";

const SearchBar = props => {
  return (
    <div className="fixed-header">
      <div className="instabox">
        <div className="icon">
          <img src={instaLogo} alt="logo" />
        </div>

        <div className="title">
          <h1>Instagram</h1>
        </div>
      </div>
      <input type="text" />
      <div className="icons">
        <div className="icon">
          <img src={compass} alt="compass" />
        </div>
        <div className="icon">
          <img src={heart} alt="heart" />
        </div>
        <div className="icon">
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
