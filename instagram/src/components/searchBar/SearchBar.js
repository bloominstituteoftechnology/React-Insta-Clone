import React, { Component } from 'react';
import InstagramWord from '../../images/Instagram-Logo.png';
import InstagramLogo from '../../images/Instagram-Grigio.png';
import './SearchBar.css';


const SearchBar = props => {
    return (
        <div class='searchBar'>
            <img class = 'logo' src={InstagramLogo} alt = 'instagram-logo' />
            <img class = 'word' src={InstagramWord} alt = 'instagram-wording'/>
            <input class='inputBar' type='text' placeholder='🔎 search ' />
            
        </div>    
    )
}

export default SearchBar;