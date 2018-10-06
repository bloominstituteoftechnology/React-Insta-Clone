import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="logo">
        <div className="logo-img">
          <i className="fab fa-instagram" />
        </div>
        <div className="logo-name">Instagram</div>
      </div>
      <input type="search" className="search" defaultValue="Search" />
      <div className="icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
