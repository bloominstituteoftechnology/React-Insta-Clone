import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
    <div className="search-bar">
        <div className="logo">
            <i class="fab fa-instagram"></i>
            <img src="https://png2.kisspng.com/sh/2be8e22c9b5a378dbbff07cfd4525aa6/L0KzQYm3VME0N5pAfZH0aYP2gLBuTfxwb5Cyi9V7aYD3PcXCkPVnaZRqRed8ZYKwfcrtjB51e15rh9D9LXzyd7E0if50fJJsitN2LUXkdIG7WfNkQGo9UNM6LkS1Q4S3V8k2OWY3S6cEOUi1QIa9U8MveJ9s/kisspng-logo-script-typeface-user-myfonts-font-logo-instagram-5ad049cc8988a1.4233079515235998205633.png"/>
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