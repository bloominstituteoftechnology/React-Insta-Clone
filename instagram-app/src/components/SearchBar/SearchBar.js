import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      
      <div className="logo">
      <i id="fab-logo" className="fab fa-instagram" />
      </div>

      <input 
      type="text"
      placeholder="Search"
      />

      <div className="icons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
  )
}

export default SearchBar;