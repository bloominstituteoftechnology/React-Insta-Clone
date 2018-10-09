import React from 'react';
import Logo from './Logo';
import Search from './Search';
import AccountManagement from './AccountManagement';
import './searchbar.css'

let SearchBar = props => {
    return (
        <header>
            <nav>
                <Logo />
                <Search searchHandler={props.searchHandler}/>
                <AccountManagement />
            </nav>
        </header>
    )
}

export default SearchBar;