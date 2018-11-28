import React from "react";
import IGLogo from "./../../img/iglogo.png";
import "./Search.css";

const SearchBarContainer = () => {
  return (
    <div className="search-bar">
      <div className="search-img">
      <i className='fab fa-instagram' />
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="fa fa-compass" />
        </div>
        <div className="social">
          <i className="fa fa-heart" />
        </div>
        <div className="social">
          <i className="fa fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBarContainer;
