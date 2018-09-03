import React from "react";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <input placeholder="Search" type="text" onChange={props.searchHandler} />
    </div>
  );
};

export default SearchBar;
