import React, { Component } from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className='search-section'>
            <div className='instagram-icons'>
                <i class="fa fa-instagram fa-3x" aria-hidden="true"></i>
                <img src='https://itsdcdn.com/resources/services/logowide/170/instagram.png' className ='instagram-title' alt='Instagram Logo' />
            </div>

            <input type='text' placeholder='Search' className='search-bar'></input>

            <div className='menu-icons'>
                <i class="fa fa-compass fa-3x" aria-hidden="true"></i>
                <i class="fa fa-heart-o fa-3x" aria-hidden="true"></i>
                <i class="fa fa-user-o fa-3x" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default SearchBar;