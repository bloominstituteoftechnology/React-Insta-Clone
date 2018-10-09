import React from "react";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-logo">
          <i className="fab fa-instagram" />
          <span className="search-line" />
          <h1>Instagram</h1>
        </div>
        <form action="">
          <input type="text" placeholder="Search" />
        </form>
        <div className="search-icons">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
