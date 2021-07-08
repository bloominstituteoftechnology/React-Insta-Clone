import React from "react";

const SearchBar = props => {
  return (
    <div className="search">
      <input
        onChange={props.handleSearchChange}
        name="search"
        placeholder="Search..."
        autoComplete="off"
      />
    </div>
  );
};

export default SearchBar;
