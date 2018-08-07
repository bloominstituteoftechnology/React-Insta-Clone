import React from "react";
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="search-bar-container">
      <div className="social-left">
        <i class="fa fa-instagram" aria-hidden="true" /> 
        <span>|</span>
        <img src="../intagram/public/pictures/Instagram_logo.png" alt="instagram-logo"/>
      </div>
      <input className="search-bar" type="text" placeholder="search"/>
      <div className="social-right">
        <i class="fa fa-compass" aria-hidden="true" />
        <i class="fa fa-heart" aria-hidden="true" />
        <i class="fa fa-user" aria-hidden="true" />
      </div>
    </div>
  );
};

export default SearchBar;
