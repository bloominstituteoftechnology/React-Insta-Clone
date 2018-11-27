import React, { Component } from 'react';

import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className='search-bar'>
            <div className='search-input'>
                <input type='text' placeholder='What are you looking for...'  />
            </div>
            <div className='social'>
                <i className='fa fa-compass' />
            </div>
            <div className='social'>
                <i className='fa fa-heart' />
            </div>
            <div className='social'>
                <i className='fa fa-user-circle' />
            </div>

        This is the search bar
        </div>
    );
}

export default SearchBar;