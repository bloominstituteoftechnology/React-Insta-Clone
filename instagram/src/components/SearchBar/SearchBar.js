import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <div className="logo-container">
                <img src='https://image.flaticon.com/icons/svg/1077/1077042.svg' alt='instagram logo'/>
                <p>Instagram</p>
            </div>
            <div className="search-container">
                <input type='text' placeholder= '&#x1f50d; Search'/>
            </div>
            <div className="icon-container">
                <img src='https://image.flaticon.com/icons/svg/77/77521.svg' alt='explore'/>
                <img src='https://image.flaticon.com/icons/svg/149/149217.svg' alt='likes'/>
                <img src='https://image.flaticon.com/icons/svg/126/126486.svg' alt='user'/>
            </div>
        </div>
    )
}

export default SearchBar;