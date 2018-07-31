import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img src="./instagram-logo.jpg" alt="Logo" />
      <input className="search-bar-input" placeholder="Search..." />
      <div className="search-bar-icons"></div>
    </div>
  );
}
export default SearchBar;
