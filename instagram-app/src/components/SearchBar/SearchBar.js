import React from 'react';
import instagram from '../../instagram.svg';
import compass from '../../compass.svg';
import heart from '../../heart.svg';
import user from '../../user.svg';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <div className="heading-logo">
                <img src={instagram} className="instagram-logo" alt="logo" />
                <h1>Instagram</h1>
            </div>
            

            <input className="search" type="text" placeholder="&#128269; Search" />

            <div className="user-logos">
                <img src={compass} className="compass-logo logo" alt="logo" />
                <img src={heart} className="heart-logo logo" alt="logo" />
                <img src={user} className="user-logo logo" alt="logo" />
            </div>
            
        </div>
    );
}

export default SearchBar;