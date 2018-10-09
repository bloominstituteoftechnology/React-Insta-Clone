import React from 'react';
import "./SearchBar.Css";

Const SearchBar = () => {
    return (
        <div className="searchBarContainer">
            <div className="imageContainer">
                <img alt='instagramLogo' src = " "
                className ="logoImage" />
            </div>

            <div>
                <input type= "text" placeholder="Search" />

            </div>

            
        </div>
    );
}

export default SearchBar;