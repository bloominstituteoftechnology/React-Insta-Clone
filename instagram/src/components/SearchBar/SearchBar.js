import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="row">
        <h1 className="header-logo col-sm-4">
          <i className="fa fa-instagram instagram-icon" />
          <span>Instagram</span>
        </h1>
        <input type="search" placeholder="Search" className="col-sm-4" />
        <div className="col-sm-4 right-icons">
          <i className="fa fa-compass fa-2x" />
          <i className="fa fa-heart fa-2x" />
          <i className="fa fa-user fa-2x" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
