import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return(
        <div className="search-bar-container">
            <div className="search-bar-left">
                <i class="fab fa-instagram"/>
                <div className="left-divider">|</div>
                <div>Instagram</div>
            </div>
            <div className="search-bar-center">
                <input type="text" placeholder="Search"/>
            </div>
            <div className="search-bar-right">
                <i class="far fa-compass"></i>
                <div className="right-divider">
                    <i class="far fa-heart"></i>
                </div>
                <i class="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar;
