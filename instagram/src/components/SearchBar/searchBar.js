import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import './searchbar.css';


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