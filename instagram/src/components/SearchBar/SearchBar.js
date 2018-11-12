import React from 'react';
import './SearchBar.sass';
import Logo from './Logo';
import SearchInput from './SearchInput';

const SearchBar = props => {
    return (
        <nav className="search">
            <div className="search--content">
                <Logo />
                <SearchInput />
                <div className="search--social_icons" />
            </div>
        </nav>
    );
};

export default SearchBar;
