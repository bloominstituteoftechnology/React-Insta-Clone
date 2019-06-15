import React from 'react';
import './SearchBar.css'
import IGLogo from './assets/iglogo.png';

const SearchBar = props => {
    return (
        <div className="serach-bar-wrapper">
            <div className="image-wrapper">
                <img alt="instagram logo" src={IGLogo} className="logo-image" />
            </div>
        </div>
    );
};

export default SearchBar;
