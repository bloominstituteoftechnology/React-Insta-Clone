import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="searchbar">
      <input placeholder="Search"
             type="text"
             onChange={props.search}
      />
    </div>
  );
}

export default SearchBar;
