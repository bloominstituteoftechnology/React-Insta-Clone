import React from "react";
import "./SearchBar.css";

const SearchBarNavContainer = props => {
  return (
    <div className="search">
      <div className="searchBar">
        <div className="instaImg" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="icons" />
    </div>
  );
};

export default SearchBarNavContainer;
