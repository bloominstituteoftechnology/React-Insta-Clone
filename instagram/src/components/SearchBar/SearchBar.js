import React, { Component } from 'react';
import instaLogo from '../../assets/insta-logo.jpg';
import './SearchBar.css';


const SearchBar = () => {
    return (
        <div className="header-container">
            <div className="instagram-logos">
                <img alt="instagram logo" src= {instaLogo} className="insta-logo" />
                <img alt="instagram logo text" src="" className="text-logo" />
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search" />
            </div>
            <div className="icon-container">
                <img src= "" className="nav-icon" />
                <img src= "" className="heart-icon" />
                <img src= "" className="user-icon" />
            </div>
        </div>
    );
};

export default SearchBar;