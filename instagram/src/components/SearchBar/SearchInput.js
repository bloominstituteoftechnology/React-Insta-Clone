import React from "react";
import "./SearchBar.css";

const SearchInput = props => {
  return (
    <div>
      {/* <i className="fas fa-search" /> */}
      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={props.searchPost}
      />
    </div>
  );
};

export default SearchInput;
