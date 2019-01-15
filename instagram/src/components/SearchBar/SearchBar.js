import React from 'react'

import './SearchBar.css'

const SearchBar = (props) => {
    return(
        <div className="search-bar">
            <div className="left-side">
            <i className="fab fa-instagram"></i>
            <h1>|</h1>
            <h2 className="instagram-logo">Instagram</h2>
            </div>
            <input className = "seach-input" type="text" placeholder= "Search"/>
            <div className="search-icons">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
            
        </div>
    )
}

export default SearchBar
