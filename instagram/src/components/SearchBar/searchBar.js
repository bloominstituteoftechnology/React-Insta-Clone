import React from 'react';
import LogoInstagram from "../../assets/logoInstagram.png";
import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className='search-bar'>
            <div className='logo-wrap'>
                <img className='logo-instagram'
                     src={LogoInstagram}
                     alt='Instagram Logo'
                     />
            </div>
            <div className='search-input'>
                <input type='text' placeholder='What are you looking for...' onKeyDown={props.handleSearch}  />
            </div>
            <div className='social'>
                <i className='fa fa-compass' />
            </div>
            <div className='social'>
                <i className='fa fa-heart' />
            </div>
            <div className='social'>
                <i className='fa fa-user-circle' />
            </div>
        </div>
    );
}

export default SearchBar;