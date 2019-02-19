import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-bar-container-left">
                <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                <h2 className="search-bar-heading">Instagram</h2>
            </div>
            <div className="search-bar-container-middle">
                <input className="search-bar-user-input" type="text" placeholder="Search"/>
            </div>
            <div className="search-bar-container-right">
                <a href="#"><i className="far fa-compass"></i></a>
                <a href="#"><i className="far fa-heart"></i></a>
                <a href="#"><i className="far fa-user"></i></a>
            </div>
        </div>
    );
};

export default SearchBar;