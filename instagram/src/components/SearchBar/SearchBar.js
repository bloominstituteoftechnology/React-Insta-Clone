import React from 'react';
import Logo from './Logo';
import AccountManagement from './AccountManagement';
import './searchbar.css'
import Search from './Search';


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