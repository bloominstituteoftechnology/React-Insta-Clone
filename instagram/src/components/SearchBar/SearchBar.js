import React from 'react';
import instagramLogo from '../../assets/instagram_logo.png';
import instagramCursive from '../../assets/instagram_cursive.png';
import compass from '../../assets/compass.png';
import heart from '../../assets/heart.png';
import personal from '../../assets/personal.png';
import "./SearchBarStyle.css";

export const SearchBar = () => {
    return (
        <div className='CrossBar'>
            <div className='SearchBar'>
                <div className='logos'>
                    <img className="instagramLogo" src={instagramLogo} alt='instagram_logo' />
                    <img className="instagramCursive" src={instagramCursive} alt='instagram_cursive' />
                </div>
                <input className="search" type='text' placeholder = 'Search' />
                <div className="quickNav">
                    <img className="compass" src={compass} alt='compass' />
                    <img className="heart" src={heart} alt='heart' />
                    <img className="personal" src={personal} alt='personal' />
                </div>
            </div>
        </div>
    )
};