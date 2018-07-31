import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar-wrap" >
            <input className="search-input" placeholder="&#8981; Search" />
            <span>
                <i className="far fa-compass fa-lg" />
            </span>
            <span>
                <i className="far fa-heart fa-lg" />
            </span>
            <span>
                <i className="far fa-user-circle fa-lg" />
            </span>
        </div>

    );
};

export default SearchBar;