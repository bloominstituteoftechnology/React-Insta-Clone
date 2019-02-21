import React from "react";
import PropTypes from "prop-types";
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

SearchInput.propTypes = {
  searchPost: PropTypes.func
};

export default SearchInput;
