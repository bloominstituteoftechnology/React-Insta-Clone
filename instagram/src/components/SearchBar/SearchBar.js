import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="searchbar-container">
        <div className="searchbar-header">
            <div><i class="fas fa-camera"></i></div>
            <div>Instagram</div>
        </div>
        <div className="searchbar-search">
            <input placeholder="Search" />
        </div>
        <div className="searchbar-nav">
            <div><i class="far fa-compass"></i></div>
            <div><i class="far fa-heart"></i></div>
            <div><i class="far fa-user"></i></div>
        </div>
    </div>
  );
};

export default SearchBar;