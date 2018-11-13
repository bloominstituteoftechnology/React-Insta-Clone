import React, { Component } from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className='search-bar'>
            <div>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <img src='https://itsdcdn.com/resources/services/logowide/170/instagram.png' className ='instagram-title' alt='Instagram Logo' />
            </div>

            <input type='text' placeholder='Search'></input>

            <div>
                <i class="fa fa-compass" aria-hidden="true"></i>
                <i class="fa fa-heart-o" aria-hidden="true"></i>
                <i class="fa fa-user-o" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default SearchBar;