import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <i className="fab fa-instagram" />
      <span className="line">|</span>
      <h1 className="insta-logo">Instagram</h1>
      <div className="search">
        <span className="fas fa-search" />
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <div className="navigation">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
