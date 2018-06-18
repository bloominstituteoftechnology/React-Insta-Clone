import React from 'react';
import './SearchBar.css';
import SearchBarLogos from './SearchBarLogos';
import SearchBarInput from './SearchBarInput';
import SearchBarActions from './SearchBarActions';

const SearchBar = (props) => {
  return(
    <div className="search-bar">
      <SearchBarLogos />
      <SearchBarInput />
      <SearchBarActions />
    </div>
  );
};

export default SearchBar;