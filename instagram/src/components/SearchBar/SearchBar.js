import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar-wrap" >
            <span className="search-bar-left" >
                <i className="fab fa-instagram fa-2x "></i>
            </span>
            <input className="search-input" placeholder="&#8981; Search" />
            <span className="search-icons" >
                <i className="far fa-compass fa-lg" />
            </span>
            <span className="search-icons">
                <i className="far fa-heart fa-lg" />
            </span>
            <span className="search-icons">
                <i className="far fa-user-circle fa-lg" />
            </span>
        </div>

    );
};

export default SearchBar;