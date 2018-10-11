import React from 'react';
import styles from './Header.css';
import EndButtons from './EndButtons';
import Search from './Search';
import { EventEmitter } from '../../events.js'

const Header = ({searchInput}) => (
    <div className='header-container'>
        <div className='header-left'>
            <img className='icon' src={require('../../icons/insta_icon.png')} alt='Instagram Icon'/>   
            <img className='logo' src={require('../../icons/insta_logo.png')} alt='Instagram Logo'/>
        </div>
        <div className='searchbar'>
            <Search />
            <input 
                className='search-input' 
                type='text' 
                placeholder='Search'
                value={searchInput}
                onChange={(event) => EventEmitter.dispatch('searchChange', event)}
            />
        </div>
        <div className='header-right'>
            <EndButtons />
            <div className='logout-btn' onClick={() => EventEmitter.dispatch('logout')}>Log out</div>
        </div>
    </div>
);

export default Header;