import React, { Component } from 'react';
// import dummyData from './src/dummy-data';
import instagram from '../../instagram-brands.svg';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(faCoffee);


const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <div className="logo-container">
                    <img className="App-logo" src={instagram} alt="logo" />
                    <img className="App-text-logo" src="https://fontmeme.com/images/instagram-new-logo.png" alt="logo"/>
                </div>
                <div className="search-box">
                    <input type="text"></input>
                </div>
                <div className="icon-container">
                    <img className="compass icon" src={instagram} alt="logo" />
                    <img className="heart icon" src={instagram} alt="logo" />
                    <img className="person icon" src={instagram} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;