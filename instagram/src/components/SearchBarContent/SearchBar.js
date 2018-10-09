import React from 'react';
import './searchBarStyles.css';
const SearchBar = props =>{
    return(
        <div className="search-bar-section">
            <header className="search-bar">

                <div className="logo-section">
                    <img alt="instagram logo" className="search-bar-logo" src="https://clipart.info/images/ccovers/1516920571instagram-png-instagram-icon-1600x1600.png" />
                    <h3>Instagram</h3>
                </div>

                <input className="search-box" type="text" placeholder="search" />

                <div className="icon-section">
                    <i className="fas fa-compass"></i>
                    <i className="fas fa-heart"></i>
                    <i className="fas fa-user"></i>
                </div>
            </header>
        </div>
    )
}

export default SearchBar;