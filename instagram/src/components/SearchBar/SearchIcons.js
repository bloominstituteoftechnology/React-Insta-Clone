import React from 'react';
import './SearchBar.css'

// Handles the user's tabs
function SearchIcons() {
    return (
        <div className="search-icons">
            <img src={require("./img/Icon1.png")} alt="Icon1"/>
            <img src={require("./img/Icon2.png")} alt="Like"/>
            <img src={require("./img/Icon3.png")} alt="People"/>
        </div>
    )
}

export default SearchIcons;