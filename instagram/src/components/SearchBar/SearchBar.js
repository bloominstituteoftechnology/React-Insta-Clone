import React from 'react';

import Logo from './Logo';
import SearchInput from './SearchInput';
import Navigation from './Navigation';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <Logo />
            <SearchInput />
            <Navigation />
        </div>
    );
}

export default SearchBar;

