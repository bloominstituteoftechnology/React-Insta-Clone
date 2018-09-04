import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar-header">
      <div className="logo" />
      <input type="text" className="search-bar" />
      <div className="account-stuff" />
    </div>
  );
};

export default SearchBar;
