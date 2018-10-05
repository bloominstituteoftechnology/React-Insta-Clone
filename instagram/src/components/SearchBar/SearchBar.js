import React from 'react';
import SearchBarLogo from './SearchBarLogo';
import SearchBarInput from './SearchBarInput';
import SearchBarActions from './SearchBarActions';
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <SearchBarLogo />
      <SearchBarInput />
      <SearchBarActions />
    </div>
  );
}

export default SearchBar;
