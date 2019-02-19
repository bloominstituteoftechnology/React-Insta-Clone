import React from "react";
// import igLogo from "./igLogo.svg";
import igWordmark from "./igWordmark.png";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div className="logo-set">
        <i className="logo fab fa-instagram" />
        {/* <img src={igLogo} alt="instagram logo" className="logo" /> */}
        <img src={igWordmark} alt="instagram wordmark" className="wordmark" />
      </div>
      <input type="text" placeholder="🔍 Search" className="search" />
      <div className="icon-set">
        <i className="icon-searchbar far fa-heart" />
        <i className="icon-searchbar far fa-compass" />
        <i className="icon-searchbar far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
