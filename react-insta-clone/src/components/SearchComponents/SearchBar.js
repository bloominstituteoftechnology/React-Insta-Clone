import React from "react";
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className = "search-container">
        <div>
        <i className="fab fa-instagram"></i>
        </div>
        <div>
           <input
            type="text"
            name="search"
            placeholder="Search"
            /> 
        </div>
        <div>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
        </div>
        </div>
    )
}

export default SearchBar;