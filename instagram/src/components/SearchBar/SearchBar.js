import React from 'react';
import './SearchBar.css';
import Logo from './SearchBarImages/screenshotlogo.png';
import Icons from './SearchBarImages/searchbaricons.png';

const SearchBar = props => {
    return (
        <header className="search-bar-wrapper">
            <div className="search-bar">
                <div className="logo-wrapper">
                    <img className="logo" src={Logo} alt="logo" />
                </div>

                <input 
                    className="search-input" 
                    type="search" 
                    placeholder="Search" 
                    onKeyDown={props.searchPosts}
                />

                <div className="icons-wrapper">
                    <img className="icons" src={Icons} alt="logos" />
                </div>
            </div>
        </header>
    )
}

export default SearchBar;