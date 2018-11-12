import React from 'react';
import './SearchBar.sass';
import Logo from './Logo';
import SearchInput from './SearchInput';
import SocialIcons from './SocialIcons';

const SearchBar = props => {
    return (
        <nav className="search">
            <div className="search--content">
                <Logo />
                <SearchInput />
                <SocialIcons />
            </div>
        </nav>
    );
};

export default SearchBar;
