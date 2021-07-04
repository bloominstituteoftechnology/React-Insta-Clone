import React from 'react';
import Navigation from './Navigation';
import './SearchBar.css';
import logo from './img/logo.PNG';

const SearchBar = props => {
    return (
        <div className="search-container">
        <div className="search-bar">
            <div className="logo">
                <button><img src={logo} alt="instagram"/></button>
            </div>
            <div className="search">
                <input placeholder="Search" onFocus={props.focusSearch} onBlur={props.focusSearch} onChange={props.updateSearch}/>
                <div className="search-icon" style={{transform: 'rotate(-45deg)', fontWeight:'bold'}}>&#9906;</div>
            </div>

            <Navigation logout={props.logout}/>
        </div>
        </div>

    );
}

export default SearchBar;