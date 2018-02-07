import React, { Component } from 'react';
import styles from './SearchBar.css';
import searchImage from './search-image.png';

const SearchBar = () => {
    return (
    <div className="search-container">
        <input className="input" type="text" placeholder="Search" />
        <img className="search-image" src={searchImage} alt="search image" />
    </div>
    );
}

export default SearchBar;
