import React from 'react';
import InstagramWord from '../../images/Instagram-Logo.png';
import InstagramLogo from '../../images/Instagram-Grigio.png'
import './SearchBar.css';



const SearchBar = (props) => {
    return (
        <div className="searchBar">
            <img src={InstagramLogo} className="logo"/>
            <img src={InstagramWord} className="word"/>
            <header className="searchBar">
             <input type="text" placeholder="search" className="searchField" />
            </header>
        </div>
    )
}

export default SearchBar;