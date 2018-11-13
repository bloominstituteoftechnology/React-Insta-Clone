import React, { Component } from 'react';
// import dummyData from './src/dummy-data';
import instagram from '../../instagram-brands.svg';
import search from './search.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faHeart } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faCompass, faSearch, faHeart);

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <div className="logo-container">
                    <img className="App-logo" src={instagram} alt="logo" />
                    <img className="App-text-logo" src="https://fontmeme.com/images/instagram-new-logo.png" alt="logo"/>
                </div>
                <div className="search-box">
                    <input type="text" name="inputText" placeholder="Search"            // value={props.inputText}
                    // onChange={props.handleChange}
                    ></input>
                    
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon="compass" className="black icon"/>
                    <FontAwesomeIcon icon="heart" className="black icon"/>
                    <img className="heart icon" src={instagram} alt="logo" />
                    <img className="person icon" src={instagram} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;