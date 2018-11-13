import React from 'react';
import './SearchBar.css';
import Logo from './screenshotlogo.png';

import Icons from './searchbaricons.png';

const SearchBar = props => {
    return (
        <header className="search-bar-wrapper">
            <div className="logo-wrapper">
                <img className="logo" src={Logo} alt="logo" />
            </div>

            <input 
                className="search-input" 
                type="text" 
                placeholder="Search" 
                onKeyDown={props.searchPosts}
            />

            <div className="icons-wrapper">
                <img className="icons" src={Icons} alt="logos" />
            </div>
        </header>
    )
}

export default SearchBar;