import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className = 'searchBarMain'>
        <img className = 'profilePic' src='#'/>
        <h1 className = 'profileName'>props.ProfileName</h1>
        </div>

    );
};

export default SearchBar;