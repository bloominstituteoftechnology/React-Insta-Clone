import React from 'react';
import instagramLogo from '../assets/instagramClone/instagramLogo.png';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar-wrapper">
            <div className="image-wrapper">
            <img alt="instagram logo" src={instagramLogo} className="logo-image" />
            </div>
            <div>
                <input type="text" placeholder="Search" />
            </div>
            <div className="social-wrapper">
                <div className="social">
                    <i className="compass" />
                </div>
                <div className="social">
                    <i className="heart" />
                </div>
                <div className="social">
                    <i className="circle" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
