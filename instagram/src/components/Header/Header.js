import React from 'react';
import styles from './Header.css'

const Header = () => (
    <div className='header-container'>
        <div className='header-left'>
            <img className='icon' src={require('../../icons/insta_icon.png')} alt='Instagram Icon'/>   
            <img className='logo' src={require('../../icons/insta_logo.png')} alt='Instagram Logo'/>
        </div>
        <input className='searchbar' type='text' placeholder='🔍 Search'/>
        <div className='header-right'>
            <img className='side-btn' src={require('../../icons/insta_plus.png')} alt='Send Button'/>
            <img className='side-btn' src={require('../../icons/insta_heart.png')} alt='Heart Button'/>
            <img className='side-btn' src={require('../../icons/insta_profile.png')} alt='Profile Button'/>
        </div>
    </div>
);

export default Header;