import React, { Component } from 'react';
import './SearchBar.css';
import InstaLogo from '../../assets/insta-logo.jpeg';
import InstaText from '../../assets/instagram_text.png';
import NavIcon from '../../assets/nav-icon.png';
import UserIcon from '../../assets/user-icon.jpeg';
import HeartIcon from '../../assets/heart-icon.png';
import PropTypes from 'prop-types';


const SearchBar = () => {
    return (
        <div className="header-container">
            <div className="instagram-logos">
                <img src={InstaLogo} alt="instagram logo" className="insta-logo" />
                <img src={InstaText} alt="instagram text" className="insta-text" />
            </div>
            <div className="search-box">
            <form>
                <input 
                type="text" 
                placeholder="Search"
                name="search" 
                />
            </form>
            </div>
            <div className="icon-container">
                <img src={NavIcon} alt="Navigation Icon" className="icon" />
                <img src={HeartIcon} alt="Heart Icon" className="icon" />
                <img src={UserIcon} alt="User Icon" className="user-icon" />
            </div>
        </div>
    );
};

SearchBar.propTypes = {
    input: PropTypes.string
};

export default SearchBar;