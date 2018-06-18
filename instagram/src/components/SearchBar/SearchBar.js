import React from 'react';
import logo from '../SearchBar/logo.png';

const SearchBar = props => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="Instagram" />
            <input className="search" placeholder="Search" />
        </div>
    );
};

export default SearchBar;