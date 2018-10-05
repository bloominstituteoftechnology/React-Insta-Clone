import React from 'react';
import './search.css';

const FontAwesome = require("react-fontawesome");

const SearchBar = props => {
    return (
        <div className='searchBar'>
            <div className="imgs-left" >
            <i class="fab fa-instagram fa-4x"></i>
                <img src="https://buxton.com.au/static/img/instagram.svg" className="name-logo" />
            </div>
            <div className="center-content">
                <input type='text' placeholder=" &#x1F50D;search" />
            </div>
            <div className="imgs-right" >
            <a href="#"> <i className="far fa-compass fa-2x icon"></i> </a>
            <a href="#"> <i className="far fa-heart fa-2x icon"></i> </a>
            <a href="#"> <i class="far fa-user fa-2x icon"></i> </a>
            </div>
        </div>
    )
}


export default SearchBar;