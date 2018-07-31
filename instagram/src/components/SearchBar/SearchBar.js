import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="header">
            <div><img src="img/logo.png" alt="Instagram logo" className="logo"/></div>
            <div><input name="search" placeholder={'\u2315' +' Search'} className="search-bar" type="text" onChange={props.filter} /></div>
            <div className="icons"><img src="img/search.png" alt="Explore"/>
            <img src="img/heart.png" alt="Hearts"/>
            <img src="img/profile.png" alt="Profile"/></div>
        </div>
    );
}

export default SearchBar;
