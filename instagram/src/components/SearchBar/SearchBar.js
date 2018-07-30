import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = () => {
    return (
        <div className="header">
            <img src="img/logo.png" />
            <input name="search" placeholder={'\u2315' +' Search'} />
            <img src="img/search.png" />
            <img src="img/heart.png"/>
            <img src="img/profile.png" />
        </div>
    );
}

export default SearchBar;
