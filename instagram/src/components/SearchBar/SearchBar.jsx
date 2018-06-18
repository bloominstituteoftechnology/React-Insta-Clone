import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
    <div className="search-bar">
        <div className="logo">Instagram</div>
        <div className="search-input">
            <input type="text" placeholder="search"></input>
        </div>
        <div className="navigation-logos">
            <div className="compass">1</div>
            <div className="likes">2</div>
            <div className="profile">3</div>
        </div>
    </div>
)

export default SearchBar