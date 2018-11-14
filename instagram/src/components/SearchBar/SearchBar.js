import React from 'react';
import './SearchBar.css';
import * as Icon from 'react-feather';

function SearchBar(){
    return(
        <div className='search-bar'>
            <div className='logos'>
                <Icon.Instagram className='home-button'/>
                <span>|</span>
                <a className='logo' href='#'>Instagram</a>
            </div>
            <form className='search'>
                <input>
                </input>
            </form>
            <div className='nav-buttons'>
                <Icon.Compass className='menu-button'/>
                <Icon.Heart className='menu-button'/>
                <Icon.User className='menu-button'/>
            </div>
        </div>
    );
}

export default SearchBar;