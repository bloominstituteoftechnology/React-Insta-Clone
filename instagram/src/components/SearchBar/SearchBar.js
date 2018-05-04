import React from 'react';
import './SearchBar.css';
import logosm from '../assets/iglogo-sm.svg';
import logo from '../assets/iglogo.svg';
import compass from '../assets/compass.png';
import heart from '../assets/heart.png';
import profile from '../assets/profile.png';

const SearchBar = props => {
    return (
        <div className="search-wrapper">
        <div className="search-bar">
            <div className="d-flex">
                <img className="logo-sm" src={logosm}/>
                <div className="divider"></div>
                <img className="logo" src={logo}/>
            </div>
                <input type="text" placeholder="Search"className="search-field"></input>
            <div className="d-flex">
                <img className="search-icon" src={compass} />
                <img className="search-icon" src={heart} />
                <img className="search-icon" src={profile} />
            </div>
        </div>
        </div>
    );
};

export default SearchBar;