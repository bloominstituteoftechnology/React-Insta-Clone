import React from 'react';
import logo from '../SearchBar/logo.png';
import profile from '../SearchBar/profile.png';
import explore from '../SearchBar/explore.png';
import activity from '../SearchBar/activity.png';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="header">
            <div>
                <img className="logo" src={logo} alt="Instagram" />
            </div>
            <input className="search" placeholder="Search" />
            <div className="directory">
                <div className="links">
                    <a href="/"><img src={profile}/></a>
                    <a href="/"><img src={explore}/></a>
                    <a href="/"><img src={activity}/></a>
                </div>
            </div> 
        </div>
    );
};

export default SearchBar;