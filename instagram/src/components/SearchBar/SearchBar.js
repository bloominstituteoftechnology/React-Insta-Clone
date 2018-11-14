import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <i className="fab fa-instagram icon" />
          <h1 className="site-title">Instagram</h1>
        </div>
        <form onSubmit={props.filterItems} className="search">
          <input
            type="text"
            className="search-input fa fa-input"
            placeholder="&#xf002; Search"
            value={props.filter}
            onChange={props.handleInputChange}
          />
        </form>
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
