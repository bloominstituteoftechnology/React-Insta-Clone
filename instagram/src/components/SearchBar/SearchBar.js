import React from 'react';
import styles from './SearchBar.css';
import searchIcon from './search-icon.png';

const SearchBar = () => {
  return (
    <div>
      <form>
        <input className="search-input" type="text" />
      </form>
      <div className="search-container">
        <div className="search-text">Search</div>
        <img className="search-icon" src={searchIcon} alt="search icon" />
      </div>
    </div>
  );
}

export default SearchBar;