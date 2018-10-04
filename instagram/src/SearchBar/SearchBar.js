import React from 'react';
import Logo from './Logo';
import './SearchBar.css';
import Search from './Search';
import Icons from './Icons';

const SearchBar = (props) => {
        return (
            <div className='searchBar'>
                <Logo />
                <Search />
                <Icons />
            </div>
        )
}


export default SearchBar;