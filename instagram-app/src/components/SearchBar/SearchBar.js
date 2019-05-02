import React from 'react';
import instagram from '../../instagram.svg';
import compass from '../../compass.svg';
import Heart from '../../Heart.js';
import user from '../../user.svg';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <div className="heading-logo">
                <img src={instagram} className="instagram-logo" alt="logo" />
                <h1>Instagram</h1>
            </div>
            

            <input onChange={props.search} className="search" type="text" placeholder="&#128269; Search" />

            <div className="user-logos">
                <img src={compass} className="compass-logo logo" alt="logo" />
                <Heart />
                <img src={user} className="user-logo logo" alt="logo" />
            </div>
            
        </div>
    );
}

export default SearchBar;