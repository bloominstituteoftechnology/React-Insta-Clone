import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className="search">
            <img src={require('../../img/instagram-new.png')} alt='instagram logo icon' />
            <p>|</p>
            <img src={require('../../img/logo.png')} alt="instagram logo text" />
            <form>
                <input placeholder="Search" />
            </form>
            <img src={require('../../img/compass.png')} alt="compass icon" />
            <img src={require('../../img/heart-icon.png')} alt="heart icon" />
            <img src={require('../../img/people.png')} alt="people icon" />
        </div>
    )
}

export default SearchBar;