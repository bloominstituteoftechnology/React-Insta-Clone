import React from 'react'

import './SearchBar.css'

const SearchBar= (props) => {
    return(
        <div className="search-bar">
            <div className="left-side">
            <i className="fab fa-instagram"></i>
            <hr/>
            <h2 className="instagram-logo">Instagram</h2>
            </div>
            <input className = "seach-input" type="text" placeholder= "Search"/>
            <div className="search-icons">
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
            </div>
            
        </div>
    )
}

export default SearchBar
