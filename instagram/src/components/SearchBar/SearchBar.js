import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar">
        <i class="fas fa-camera-retro"></i> 
        <img className="insta-logo" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png.png" alt="instagram logo" /> 
        <input></input> 
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="fas fa-user-alt"></i>



        </div>
    );
}

export default SearchBar;