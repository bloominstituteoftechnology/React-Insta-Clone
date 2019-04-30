import React from "react";

const SearchBar = props => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        name="searchValue"
        type="text"
        onChange={props.change}
        placeholder="Search"
        value={props.searchValue}
      />
    </form>
  );
};

export default SearchBar;
