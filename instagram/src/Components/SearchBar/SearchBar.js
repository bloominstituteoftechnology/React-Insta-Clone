import React from 'react';
import './SearchBar.css';
const SearchBar = () => {
    return (
    <div className='Search'>
        <div className='icon-holder'>
            <div className='icon'>Camera Logo</div>
            <div className='icon'>Instagram</div>
        </div>
        <input className='Search__bar' type='text' value='search'></input>
        <div className='icon-holder'>
            <div className='icon'>Compass Icon</div>
            <div className='icon'>Heart Icon</div>
            <div className='icon'>Profile Icon</div>
        </div>
    </div>
    )};

export default SearchBar;