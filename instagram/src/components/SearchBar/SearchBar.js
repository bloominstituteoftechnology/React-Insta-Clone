import React from 'react';
import InstagramWord from '../../images/Instagram-Logo.png';
import InstagramLogo from '../../images/Instagram-Grigio.png'
import './SearchBar.css';



const SearchBar = (props) => {
    return (
        <div className="searchBar">
            <img src={InstagramLogo} className="logo"/>
            <img src={InstagramWord} className="word"/>
             
             <input type="text" placeholder="search" className="inputBar" />
            
        </div>
    )
}

export default SearchBar;