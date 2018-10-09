import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Account from './Account';
import './searchbar.css'

let SearchBar = props => {
    return (
        <header>
            <nav>
                <Logo />
                <Search searchHandler={props.searchHandler}/>
                <Account />
            </nav>
        </header>
    )
}

export default SearchBar;