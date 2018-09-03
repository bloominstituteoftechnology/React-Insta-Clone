import React from 'react';
import './SearchBar.css'

const SearchIcons = () => {
    return (
        <div className="search-icons">
            <img src={require("./Icon1.png")} alt="Icon1"/>
            <img src={require("./Icon2.png")} alt="Like"/>
            <img src={require("./Icon3.png")} alt="People"/>
        </div>
    )
}

export default SearchIcons;