import React, { Component } from 'react';
import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className='search'>
        <img className="insta-logo" src="https://cdn.dribbble.com/users/59145/screenshots/2722476/instagram_new_logo.jpg" alt="instagram-logo"/>
        <h1 className='title'>Instagram</h1>
        <form className="search-form">
        <input type="text" placeholder="Search"/>
        </form>
        <div className="icons">
        <i class="far fa-compass"></i>
        <i class="fas fa-heart"></i>
        <i class="fas fa-user"></i>
        </div>
        </div>
    )
}


  export default SearchBar;