import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="row">
        <div className="col fab fa-instagram" />
        <div className="col">Instagram</div>
        <input type="text" />
      </div>
    </div>
  );
};

export default SearchBar;
