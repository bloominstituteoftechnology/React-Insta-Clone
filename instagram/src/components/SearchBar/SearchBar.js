import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search" className="search-input"/>
        </div>
    );
}

export default SearchBar;