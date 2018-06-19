import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
    <div className="search-bar">
        <div className="logo">
            <i class="fab fa-instagram"></i>
            <img src="https://3rockmarketing.com/wp-content/uploads/2016/09/instagram-logo.png" alt=""/>
        </div>
        <div className="search-input">
            <input type="text" placeholder="search"></input>
        </div>
        <div className="navigation-logos">
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
        </div>
    </div>
)

export default SearchBar