import React, { Component } from "react";


const SearchBar = props => {
    return (
        <div className="navbarContainer">
            <div className="instagramLogo">
                <img src="#" alt="instagram logo" />
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