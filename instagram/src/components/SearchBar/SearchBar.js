import React from "react";
import "./SearchBar.css";
 const SearchBar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <i className="fab fa-instagram icon" />
          <h1 className="site-title">Instagram</h1>
        </div>
        <div className="search">
          <input
            type="text"
            name="search"
            className="search-input fa fa-input"
            placeholder="&#xf002; Search"
          />
        </div>
        <div className="links">
          <a href="">
            <i className="fas fa-chevron-circle-down icon" />
          </a>
          <a href="">
            <i className="far fa-heart icon" />
          </a>
          <a href="">
            <i className="far fa-user icon" />
          </a>
        </div>
      </div>
    </header>
  );
};
 export default SearchBar;