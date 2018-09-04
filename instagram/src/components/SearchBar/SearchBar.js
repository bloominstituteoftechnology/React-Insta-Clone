import React from 'react';
import GlyphLogo from '../../instagram_assets/glyph-logo.png';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className='search-bar-container'>
            <div className='camera-logo'>
                <img src={GlyphLogo} />
            </div>
            <input type='text' placeholder='Search' />
        </div>
    );
}

export default SearchBar;