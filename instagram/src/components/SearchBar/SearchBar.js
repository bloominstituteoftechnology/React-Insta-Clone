import React from "react";
import "./SearchBar.css";

const SearchBar = _ => {
  return (
    <div className="input">
      <input className="searchbar" type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
