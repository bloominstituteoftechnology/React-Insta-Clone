import React from 'react';
import './search.css';

const SearchBar = () => {
    return (
        <div className="searchbar">
            <div className="logo">
            <i className="fab fa-instagram"></i> <p className="instap">Instagram</p>
            </div>
            <input className="fa fa-input" placeholder="&#xf002; Search"/>
            <div className="iconz">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar;