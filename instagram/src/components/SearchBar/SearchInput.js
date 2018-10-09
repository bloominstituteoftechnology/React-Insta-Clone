import React from "react";
import "./SearchBar.css";

const SearchInput = () => {
  return (
    <div>
      <i className="fas fa-search" />
      <input className="search" type="text" placeholder="Search" />
    </div>
  );
};

export default SearchInput;
