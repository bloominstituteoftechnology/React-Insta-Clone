import React from 'react';
import icon from '../../assets/instagram-icon.png';
import logo from '../../assets/instagram-logo.png';

import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <header>
            <div className = 'icon-logo-div'>
                <a href='https://www.instagram.com'><img className = 'instagram-icon' src = { icon } alt='instagram icon' /></a>
                <a href='https://www.instagram.com'><img className = 'instagram-logo' src = { logo } alt='instagram logo' /></a>
            </div>

            <div className = 'header-input-div'>
                <i className = 'fas fa-search'></i>
                <input 
                    className = 'header-input-field' 
                    type = 'search' 
                    placeholder = 'Search' 
                    onChange = { props.handleSearch } 
                />
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
