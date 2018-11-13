import React, { Component } from "react";
import { Fragment } from "react";
import "./SearchBar.css";
const SearchBar = props => {
  return (
    <div className="searchBarContainer">
      <div className="icon">
        <h2>Instagram</h2>
      </div>
      <input
        className="searchBar"
        type="search"
        placeholder="Search things!"
        results="0"
      />
    </div>
  );
};

export default SearchBar;

//    <input type="search" id="SearchBar" placeholder="Search" results="0" />
