import React, { Component } from 'react';
import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className='search-bar-container'>
            <div className='logo-and-text'>
                <i class="fab fa-instagram"></i>
                <h1 className='logo-text'>Instagram</h1>
            </div>
            <div>
            <form class="search">
                <input className="search-input" type="text" placeholder="Search.." name="search" />            </form>
            </div>
            <div className='icons'>
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar;