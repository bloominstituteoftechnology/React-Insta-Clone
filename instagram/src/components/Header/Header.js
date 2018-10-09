import React from 'react';
import styles from './Header.css';
import EndButtons from './EndButtons';
import Search from './Search';

const Header = () => (
    <div className='header-container'>
        <div className='header-left'>
            <img className='icon' src={require('../../icons/insta_icon.png')} alt='Instagram Icon'/>   
            <img className='logo' src={require('../../icons/insta_logo.png')} alt='Instagram Logo'/>
        </div>
        <div className='searchbar'>
            <Search />
            <input className='search-input' type='text' placeholder='Search'/>
        </div>
        <div className='header-right'>
            <EndButtons />
        </div>
    </div>
);

export default Header;