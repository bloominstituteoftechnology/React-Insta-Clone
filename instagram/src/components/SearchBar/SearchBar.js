import React from 'react';
import instagramLogo from '../../assets/instagram_logo.png';
import instagramCursive from '../../assets/instagram_cursive.png';

export const SearchBar = () => {
    return (
        <div>
           <img src={instagramLogo} width='4%' height= '4%' alt='instagram_logo' />
           <img src={instagramCursive} width='15%' height= '15%' alt='instagram_cursive' />
           <input type='text' placeholder = '🔎 search' />
        </div>
    )
};