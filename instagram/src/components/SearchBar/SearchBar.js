import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <i className="fas fa-camera-retro align-left"></i> 
            <img className="insta-logo align-left" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png.png" alt="instagram logo" /> 
            <input defaultValue="Search"></input> 
            <i className="far fa-compass align-right"></i>
            <i className="far fa-heart align-right"></i>
            <i className="fas fa-user-alt align-right"></i>
        </div>
    );
}

export default SearchBar;