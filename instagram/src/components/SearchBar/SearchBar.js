import React from 'react';
import instagramLogo from '../../assets/instagram_logo.png';
import instagramCursive from '../../assets/instagram_cursive.png';
import quickNav from '../../assets/quick_nav.png';
import "./SearchBarStyle.css";

export const SearchBar = () => {
    return (
        <div className='SearchBar'>
            <div className='logos'>
                <img className="instagramLogo" src={instagramLogo} alt='instagram_logo' />
                <img className="instagramCursive" src={instagramCursive} alt='instagram_cursive' />
            </div>
            <input className="search" type='text' placeholder = '🔎 Search' />
            <div>
                <img className="quickNav" src={quickNav} alt='quick_nav' />
            </div>
        </div>
    )
};