import React from 'react';
import './SearchBar.css';


const SearchBar = () => {
    return (
        <div className="insta-header">
            <img/>
            <span className="header-title">
            Instagram
            </span>
            <input type="text" placeholder="Search" className="header-input"></input>
            <img/>
            <img/>
        </div>
    )
}


export default SearchBar;