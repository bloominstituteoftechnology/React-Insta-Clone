import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return(
        <div className="search-bar">
            <div>
                <i className='fa fa-instagram fa-2x'></i>
                <span className="insta"> | Instagram</span>
            </div>
            <input className="search" placeholder="Search" />
            <div className="icons">
                <i className='fa fa-compass fa-2x'></i>
                <i className='fa fa-heart fa-2x'></i>
                <i className='fa fa-user fa-2x'></i>
            </div>
        </div>
    )   
}

export default SearchBar;