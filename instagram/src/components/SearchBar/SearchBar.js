import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='searchContainer'>
            <img src='https://image.flaticon.com/icons/svg/1077/1077042.svg' alt='instagram logo'/>
            <p>Instagram</p>
            <input type='text' placeholder= 'Search'/>
            <img src='https://image.flaticon.com/icons/svg/77/77521.svg' alt='explore'/>
            <img src='https://image.flaticon.com/icons/svg/149/149217.svg' alt='likes'/>
            <img src='https://image.flaticon.com/icons/svg/126/126486.svg' alt='avatar'/>
        </div>
    )
}

export default SearchBar;