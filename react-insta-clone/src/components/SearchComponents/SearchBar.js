import React from "react";

const SearchBar = props => {
    return (
        <div className = "search-container">
        <div>
        <i class="fab fa-instagram"></i>
        </div>
        <div>
           <input
            type="text"
            name="search"
            placeholder="Search"
            /> 
        </div>
        <div>
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
        </div>
        </div>
    )
}

export default SearchBar;