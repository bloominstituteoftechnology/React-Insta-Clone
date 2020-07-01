import React from "react";
import "./SearchBar.css";

const searchBar = () => {
  return (
    <div className="searchBar">
      <div className="logo">
        <i className="fab fa-instagram" />
        <div className="vertical" />
        <span>Instagram</span>
      </div>
      <div className='search-div'>
        <input className="search" type="text" placeholder="&#x1F50D; Search" />
      </div>
      <div className="right-icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default searchBar;