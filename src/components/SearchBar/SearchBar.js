import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import './SearchBar.css';

// Main container for the header/search bar.

const SearchBar = (props) => {
    // Gets props:
        // searchHandler: ()
    return (
        <div className='searchBar'>
            <Logo />
            <Search searchHandler={props.searchHandler} />
            <Menu />
        </div>
    );
}

export default SearchBar;