import React from 'react'
import './SearchBar.css'

function SearchBar() {
    return (
        <div>
        <div className="search-bar">
            <div className="logo-content">
                 <i className="fab fa-instagram"></i> 
                <img className="logo" src="/images/instagram.png" alt="logo" />

            </div>
            <form className="search">
                <input type="text" placeholder="Search" />
            </form>
            <div className="menu">
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
            </div>
        </div>
        <hr/>
        </div>
    )
}

export default SearchBar