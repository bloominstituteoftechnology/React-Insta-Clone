import React, { Component } from "react";
import './searchbar.css';


const SearchBar = props => {
    return (
        <div className="navbarContainer">
            <div className="instagramLogo">
                <img className="camera" src="https://www.seeklogo.net/wp-content/uploads/2016/05/instagram-icon-logo-vector-download-400x400.jpg" alt="instagram logo" />
                <h1>|</h1>
                <img className="writing" src="https://cdn.worldvectorlogo.com/logos/instagram-1.svg" alt="instagram logo" />
            </div>
            <div className="searchBar">
                <input type="text" placeholder="search" />
            </div>
            <div className="navIcons">
                <button className="button button-blue">bunch of icons</button>
            </div>
        </div>
    )
}

export default SearchBar;