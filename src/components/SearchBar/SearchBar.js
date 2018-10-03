import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import './SearchBar.css';

// Main container for the header/search bar.

const SearchBar = (props) => {
    return (
        <div className='searchBar'>
            <Logo />
            <Search />
            <Menu />
        </div>
    );
}

export default SearchBar;