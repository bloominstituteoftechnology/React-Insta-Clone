import React from 'react';
import './searchBar.scss';

const SearchBar = props => {
    return (
        <button className='search'>
            <i className='fas fa-search' />
            <i>Search</i>
        </button>
    )
}

export default SearchBar;