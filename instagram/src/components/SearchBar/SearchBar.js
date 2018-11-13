import React, { Component } from 'react';
// import dummyData from './src/dummy-data';
import instagram from '../../instagram-brands.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faCompass, faHeart);

const searchIcon = <i className="fas fa-search" />

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <div className="logo-container">
                    <img className="App-logo" src={instagram} alt="logo" />
                    <img className="App-text-logo" src="https://fontmeme.com/images/instagram-new-logo.png" alt="logo"/>
                </div>
                <div className="search-box">
    <input type="text" name="inputText" placeholder="Search"
                    ></input>
                    
                </div>
                <div className="icon-container">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;