import React from 'react';
import SearchLogo from './SearchLogo';

const SearchBar = () => {
    return (
        <div className="searchbar">
        {/* <SearchLogo /> */}
        <input className="input"></input>
            <div className="icons">
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
                <i className="far fa-compass"></i>
                </div>
        </div>
    );
};

export default SearchBar;