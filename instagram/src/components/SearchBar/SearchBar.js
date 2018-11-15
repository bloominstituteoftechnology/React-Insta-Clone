import React, { Component } from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-section">
      <div className="instagram-icons">
        <i className="fa fa-instagram fa-3x" />
        <img
          src="https://itsdcdn.com/resources/services/logowide/170/instagram.png"
          className="instagram-title"
          alt="Instagram Logo"
        />
      </div>

      <form onSubmit={props.searchPosts} className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={props.searchText}
          onChange={props.handleSearch}
        />
      </form>

      <div className="menu-icons">
        <i className="fa fa-compass fa-3x" />
        <i className="fa fa-heart-o fa-3x" />
        <i className="fa fa-user-o fa-3x" />
      </div>
    </div>
  );
};

export default SearchBar;
