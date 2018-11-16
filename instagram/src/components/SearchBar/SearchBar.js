import React, { Fragment } from "react";

const SearchBar = props => {
  return (
    <Fragment>
      <input
        type="text"
        placeholder="search here.."
        onChange={props.handleSearch}
        value={props.searchText}
      />
    </Fragment>
  );
};

export default SearchBar;
