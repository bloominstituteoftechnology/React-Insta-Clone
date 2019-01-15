import React from "react";

const SearchBar = props => {
  return (
    <div className="search">
      <input name="search" placeholder="Search..." autoComplete="off" />
    </div>
  );
};

export default SearchBar;
