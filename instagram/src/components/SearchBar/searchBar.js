import React from 'react';

import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className='search-bar'>
            <div className='search-input'>
                <input type='text' placeholder='What are you looking for...' onKeyDown={props.searchPosts}  />
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
        </div>
    );
}

export default SearchBar;