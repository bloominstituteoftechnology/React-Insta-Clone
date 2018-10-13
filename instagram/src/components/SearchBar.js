import React from 'react';
import Logo from './SearchBarAssets/Instagram-Logo.png';
import Brand from './SearchBarAssets/instagram-logo-text-black-png.png';
import Compass from './SearchBarAssets/compass.png'
import User from './SearchBarAssets/User.png'
import Heart from './SearchBarAssets/heart.png'



const SearchBar = () => {
    return(
        <div ClassName = 'SearchBarContainer'>
            <div className = 'branding'>
                <img src={Logo}></img>
                <img src={Brand}></img>
            </div>
            <div className = 'SearchBar'>
                <input type="text" placeholder="Search"/>
            </div>
            <div className = 'ProfileSection'>
                <img src={Compass}></img>
                <img src={User}></img>
                <img src={Heart}></img>
            </div>
		</div>
    )
}

export default SearchBar;
