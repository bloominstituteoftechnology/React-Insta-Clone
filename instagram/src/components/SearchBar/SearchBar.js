import React from 'react';
import './SearchBar.css';

const SearchBar = props =>{
    return (
        <div>
            <i className='fa fa-instagram fa-2x'>  |  Instagram</i>
            <input placeholder="search" />
            <i className='fa fa-compass fa-1x'></i>
            <i className='fa fa-heart fa-1x'></i>
            <i className='fa fa-user fa-1x'></i>
        </div>
    );
}

export default SearchBar;