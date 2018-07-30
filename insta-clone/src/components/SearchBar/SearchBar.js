import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar-top">
            <div className="logos-wrapper">
                <i class="fab fa-instagram"></i>
                <img src="./insta.png" alt="logo" className="insta-words" />
            </div>
            <div className="search-bar-wrapper">
                <span class="fa fa-search"></span>
                <input type="text" placeholder="Search" className="search-bar" />
            </div>
            <div className="social-wrapper">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    );
};

export default SearchBar;