import React from 'react';
import HeaderImages from './HeaderImages';
import SearchBar from './SearchBar';
import './header.css';

const Header = (props) => {
    return (
        <div className='header-container'>
            <HeaderImages />
            <SearchBar />
            <HeaderImages />
        </div>
    )
}

export default Header;