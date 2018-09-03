import React from "react";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="search"
        onChange={props.searchChange}
      />
    </div>
  );
};

export default SearchBar;
