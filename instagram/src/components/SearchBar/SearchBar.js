import React from 'react';
import './SearchBar.css';

// Return SearchBar
const SearchBar = () => {
  return (
    <div className="searchbar-container">
        <div className="searchbar-header">
            <div><i className="fas fa-camera"></i></div>
            <div>Instaclone</div>
        </div>
        <div className="searchbar-search">
            <input placeholder="Search" />
        </div>
        <div className="searchbar-nav">
            <div><i className="far fa-compass"></i></div>
            <div><i className="far fa-heart"></i></div>
            <div><i className="far fa-user"></i></div>
        </div>
    </div>
  );
};

export default SearchBar;