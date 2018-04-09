import React from 'react';
import logo from '../images/logo.png';
import explore from '../images/explore.png';
import activity from '../images/activity.png';
import profile from '../images/profile.png';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="container header">
            <div>
                <img className="logo" src={logo} alt="Instagram" />
            </div>            
            <input className="search" placeholder="Search" />
            <div className="directory">
                <div className="links">
                    <a href="/"><img src={explore}/></a>
                    <a href="/"><img src={activity}/></a>
                    <a href="/"><img src={profile}/></a>
                </div>
            </div>
        </div>
    );
};


export default SearchBar;