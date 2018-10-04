import React from 'react';
import Logo from './Logo';
import WordLogo from './WordLogo';
import Search from './Search';
import GPSIcon from './GPSIcon';
import LikeButton from './LikeButton';
import PersonButton from './PersonButton';
import './searchbar.css';

const SearchBar = () => {
    return (
        <div className = 'header'>
            <Logo />
            <WordLogo />
            <Search />
            <GPSIcon />
            <LikeButton />
            <PersonButton />
        </div>
    )
}

export default SearchBar;