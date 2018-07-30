import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='searchContainer'>
            <div className='searchLeft'>
                logos
            </div>

            <div className='input'>
            <input type="text" placeholder="Search" />
            </div>

            <div className='searchRight'>
                logos
            </div>

        </div>
    );
};

export default SearchBar;