import React from 'react';
import './SearchBar.css';



const SearchBar = props => {
    return (
        <div className="search-bar clear-fix">
            <div className="ig-logo-icons float-left">
                <i className="fab fa-instagram "></i>
                <img src="" className="ig-logo" alt="Ig Word Logo" />
            </div>
            <div className="search-bar-box">
                <i className="fas fa-search"></i>
                <input className="Search-box" placeholder="Search" onKeyDown={props.searchPosts}/>
            </div>
            <div className="ig-icons float-right">
                <i className="far fa-compass search-compass-icon"></i>
                <i className="far fa-heart search-heart-icon"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
};

export default SearchBar;


