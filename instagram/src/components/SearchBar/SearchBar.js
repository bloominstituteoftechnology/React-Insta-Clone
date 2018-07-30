import React from "react";
import "./SearchBar.css";
import cam from "../../assets/instagram-brands.svg";
import textLogo from "../../assets/insta-text-logo.svg";

const SearchBar = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="search-bar">
          <div className="image-group">
            <img alt="instagram camera" src={cam} className="logo-image" />
            <img
              alt="instagram logo"
              src={textLogo}
              className="logo-image text-logo"
            />
          </div>
          <div className="input-group"><input type="text" placeholder="Search" /></div>
          <div className="social-group">
             <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
