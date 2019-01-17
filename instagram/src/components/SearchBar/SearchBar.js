import React from "react";

const SearchBar = props => {
  return (
    <form className="search">
      <input
        className="mytext"
        value={props.inputSearch}
        placeholder="🔍 Search"
        name="inputSearch"
        onChange={props.handleChange}
      />
    </form>
  );
};

export default SearchBar;
