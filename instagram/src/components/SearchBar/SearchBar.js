import React from 'react';
import icon from '../../assets/instagram-icon.png'
import logo from '../../assets/instagram-logo.png';

import './SearchBar.css';

const SearchBar = () => {
    return (
        <header>
            <div className = 'icon-logo-div'>
                <img className = 'instagram-icon' src = { icon } alt='instagram icon' />
                <img className = 'instagram-logo' src = { logo } alt='instagram logo' />
            </div>

            <div className = 'header-input-div'>
                <i className = 'fas fa-search'></i>
                <input className = 'header-input-field' type = 'search' placeholder = 'Search' />
            </div>

            <div className = 'header-icons-div'>
                <i className = 'far fa-compass'></i>
                <i className = 'far fa-heart'></i>
                <i className = 'far fa-user'></i>
            </div>
        </header>
    );
}

export default SearchBar;
