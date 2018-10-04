import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="header-icon">
                <i className="fab fa-instagram"/>
            </div>
            <img src="https://fontmeme.com/images/instagram-new-logo.png" alt="instgram logo"></img>
            <input type='text' placeholder='search'></input>
            <div className="icons">
                <i className="far fa-compass"/>
                <i className="far fa-heart"/>
                <i className="far fa-user"/>
            </div>
        </div>         
        
    )
}

export default SearchBar;