import React from 'react';
import Navigation from './Navigation';
import './SearchBar.css';
import logo from './img/logo.PNG';

const SearchBar = props => {
    return (
        <div className="search-container">
        <div className="search-bar">
            <div className="logo">
                <a href="#"><img src={logo} /></a>
            </div>
            <div className="search">
                <input placeholder="Search" />
                <div className="search-icon" style={{transform: 'rotate(-45deg)', fontWeight:'bold'}}>&#9906;</div>
            </div>

            <Navigation />
        </div>
        </div>

    );
}

export default SearchBar;