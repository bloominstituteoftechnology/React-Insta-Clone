import React from 'react';


const SearchBar = props => {
    return (
        <div className="search-bar-container">
            <div className="ig-logo">
                <i className="fab fa-instagram"></i>
                <img src="." className="ig-logo"/>
            </div>
            <div className="search-bar">
                <i className="fas fa-search"></i>
                <input placeholder="Search"/>
            </div>
        </div>
    );
};

export default SearchBar;