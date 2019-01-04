import React from 'react';
import './SearchBar.css';
import logo from './Images/logo.png';
import location from './Images/location.png';
import like from './Images/like.png';
import user from './Images/user.png';

 const SearchBar = props => {
    return (
    <div className="searchContainer">
        <div className='logoSearch'>
            <a href="#"><img src={logo} alt="insta-logo" /></a>
            <input placeholder="Search" />
        </div>
        <div className="navigation">
            <a href="#"><img src={location} alt="location" /></a>
            <a href="#"><img src={like} alt="like" /></a>
            <a href="#"><img src={user} alt="user" /></a>
        </div>
    </div>
    
    )
}
 export default SearchBar; 
