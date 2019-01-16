import React from 'react';
import './SearchBar.css';
import Logo from './SearchBarAssets/Instagram-Logo.png';
import Brand from './SearchBarAssets/instagram-logo-text-black-png.png';
import Compass from './SearchBarAssets/explorer.png'
import User from './SearchBarAssets/User.png'
import Heart from './SearchBarAssets/heart.png'



const SearchBar = () => {
    return(
        <div className = 'container'>
            <div className = 'branding'>
                <img className = 'searchLogos' src={Logo} alt='logo'/>
                <img className = 'brand' src={Brand} alt='brand'/>
            </div>
            <div className = 'SearchBar'>
                <input type="text" placeholder="Search"/>
            </div>
            <div className = 'ProfileSection'>
                <img className = 'searchLogos' src={Compass}alt = 'compass'/>
                <img className = 'searchLogos' src={Heart}alt='heart'/>
                <img className = 'searchLogos' src={User}alt='user'/>
            </div>
		</div>
    )
}

export default SearchBar;
