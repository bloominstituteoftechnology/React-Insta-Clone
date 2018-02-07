import React from 'react';
import styles from './SearchBar.css';
import searchIcon from './search-icon.png';

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Search" />
      <img className="search-icon" src={searchIcon} alt="search icon" />
    </div>
  );
}

export default SearchBar;