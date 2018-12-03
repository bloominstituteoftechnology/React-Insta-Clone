import React from 'react';
import './SearchBar.css';
import logo from '../../assets/insta-logo.png';
import textLogo from '../../assets/insta-title.png'; 
import compass from '../../assets/insta-compass.png';
import heart from '../../assets/insta-heart.png';
import profile from '../../assets/insta-profile.png';

const SearchBar = props => (
    <header>
        <div className='logos'>
            <img src={logo} alt="Instagram Logo" />
            <img src={textLogo} alt="Instagram" />
        </div>
        <div>
            <input type="text" 
            placeholder="&#128269;Search" />
        </div>
        <div className="icons">
            <img src={compass} alt="compass icon" />
            <img src={heart} alt="heart icon" />
            <img src={profile} alt="profile icon" />
        </div>
    </header>
);

export default SearchBar;