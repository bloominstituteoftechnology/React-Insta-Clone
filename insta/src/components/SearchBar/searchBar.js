import React from 'react';
import './search.css';

const FontAwesome = require("react-fontawesome");

const SearchBar = props => {
    return (
        <div className='searchBar'>
            <div className="imgs-left" >
                <FontAwesome name="instagram" size="3x" />
                <img src="https://buxton.com.au/static/img/instagram.svg" className="name-logo" />
            </div>
            <div className="center-content">
                <input type='text' placeholder=" &#x1F50D;search" />
            </div>
            <div className="imgs-right" >
            <a href="#" ><FontAwesome name="compass" size="2x" className="icon" /></a>
            <a href="#" ><FontAwesome name="heart" size="2x"  className="icon" /></a>
            <a href="#" ><FontAwesome name='user' size="2x" className="icon" /></a>
            </div>
        </div>
    )
}


export default SearchBar;