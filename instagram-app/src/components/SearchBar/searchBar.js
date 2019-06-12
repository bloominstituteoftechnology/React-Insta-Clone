import React from "react";
import "./searchBar.css";

const searchBar = props => {
  return (
    <div className="searchBar">
      <div className="logo">
        <i className="fab fa-instagram" />
        <div className="vertical" />
        <span>Instagram</span>
      </div>
      <div className='search-div'>
      
        <input
          onChange={props.onchangeValue}
          className="search"
          type="text"
          placeholder="Search"
        />
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