import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchbar-container">
        <div className="searchbar-header">
            <div>Logo</div>
            <div>Instagram</div>
        </div>
        <div className="searchbar-search">
            <input placeholder="Search" />
        </div>
        <div className="searchbar-nav">
            <div>Image 1</div>
            <div>Image 2</div>
            <div>Image 3</div>
        </div>
    </div>
  );
};

export default SearchBar;