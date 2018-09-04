import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="search-bar">
      <input
        className="search"
        placeholder="Search"
        type="text"
        onChange={props.searchHandler}
      />
    </div>
  );
};

export default SearchBar;
