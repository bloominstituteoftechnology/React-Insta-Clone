import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="search-bar-wrap">
        <div className="img-wrap"></div>
        <div>
            <input type ="text" placeholder="Search" />
          </div>
        <div className="social-icons-wrapper"></div>
        </div>
    )
}


export default SearchBar;