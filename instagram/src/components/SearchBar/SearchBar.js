import React from 'react';
import './SearchBar.css';
import IGLogo from '../../img/inst-logo-01.png';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="instalogo-container">
                <img src={IGLogo} alt="insta logo" className="instalogo"/>
            </div>
            
            <input type="text" placeholder="Search" className="search-input"/>
        </div>
    );
}

export default SearchBar;