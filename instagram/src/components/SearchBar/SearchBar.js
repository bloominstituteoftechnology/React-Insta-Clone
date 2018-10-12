import React from 'react';
import './SearchBar.css';
import SearchButtons from './SearchButtons.js';
import SearchInput from './SearchInput.js';
import SearchLogo from './SearchLogo.js';

const SearchBar = (props) => {
    return (
        <div className='search-bar'>
            <SearchLogo />
            <SearchInput search={props.search}/>
            <SearchButtons />
        </div>
    )
}

export default SearchBar;