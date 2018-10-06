import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = (props) => {
    return (
        <div className='search-well'>
            <div className='search-container'>
                <img className='logo' src={require('./img/insta-camera-logo.jpg')} alt={'insta-camera'}></img>
                <div className='vl'></div>
                <img className='logo' src={require('./img/insta-logo.png')} alt={'insta-logo'}></img>
            </div>
            <div className='search-container'>
                <input className='search' type='text' placeholder='Search' value={props.searchInput} onChange={props.handleSearch} onKeyPress={props.searchUp} />
            </div>
            <div className='search-container'>
                <FontAwesomeIcon className='icons' icon='compass' />
                <FontAwesomeIcon className='icons' icon='heart' />
                <FontAwesomeIcon className='icons' icon='user' />
            </div>
        </div>
    );
};

export default SearchBar;