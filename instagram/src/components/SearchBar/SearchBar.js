import React from 'react';
import styles from './SearchBar.css';
import searchIcon from './search-icon.png';

const SearchBar = () => {
  return (
    <div>
      <form>
        <input type="text" />
      </form>
      <div className="search-text">Search</div>
      <img className="search-icon" src={searchIcon} alt="search icon" />
    </div>
  );
}

export default SearchBar;