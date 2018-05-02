import React from 'react';
import './SearchBar.css';


const SearchBar = () => {
    return (
        <div className="insta-header">
            <i class="fab fa-instagram camera"></i>
            <span className="header-title">
                Instagram
            </span>
                <input type="text" placeholder="Search" className="header-input"></input>
            <span>
                <i class="far fa-compass"></i>
                <i class="far fa-heart heart"></i>
            </span>
        </div>
    )
}


export default SearchBar;