import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-bar-container-left">
                <i className="fab fa-instagram"></i>
                <h2 className="search-bar-heading">Instagram</h2>
            </div>
            <div className="search-bar-container-middle">
                <input className="search-bar-user-input" type="text" placeholder="Search"/>
            </div>
            <div className="search-bar-container-right">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
};

export default SearchBar;