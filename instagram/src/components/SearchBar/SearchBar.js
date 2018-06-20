import React from 'react';
import './SearchBar.css';

// Return SearchBar
const SearchBar = () => {
  return (
    <div className="search-bar-container">
        <div className="search-bar-header">
            <div><i className="fas fa-camera"></i></div>
            <div>Instaclone</div>
        </div>
        <div className="search-bar-search">
            <input placeholder="Search" />
        </div>
        <div className="search-bar-nav">
            <div><i className="far fa-compass"></i></div>
            <div><i className="far fa-heart"></i></div>
            <div><i className="far fa-user"></i></div>
        </div>
    </div>
  );
};

export default SearchBar;