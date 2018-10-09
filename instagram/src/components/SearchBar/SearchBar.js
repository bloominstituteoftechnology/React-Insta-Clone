import React from 'react';
import Logo from './Logo';
import Search from './Search';
import AccountManagement from './AccountManagement';
import './searchbar.css'

let SearchBar = () => {
    return (
        <header>
            <nav>
                <Logo />
                <Search />
                <AccountManagement />
            </nav>
        </header>
    )
}

export default SearchBar;