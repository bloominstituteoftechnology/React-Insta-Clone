import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css'

let SearchBar = () => {
    return (
        <div className="search-bar-wrapper">
            <div className="image-wrapper">
                <img alt ="instagram logo" src={IGLogo} className="logo-image" />
            </div>
            <div>
                <input type="text" placeholder="Search" />
            </div>
            <div className="social-wrapper">
                <div classname="social">
                <i classname="fa fa-compass" />
            </div>
            <div classname="social">
                <i classname="fa fa-heart" />
            </div>
            <div className="social">
                <i className="fa fa-user-circle" />
            </div>
        </div>
    </div>
    );
}

export default SearchBar