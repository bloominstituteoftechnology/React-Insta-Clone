import React from 'react';
import './Searchbar.css';
import instacam from './instacam.png';
import instaname from './instaname.png'


const IconSearchBar = (props) => {
    return (
        <div className="icon-container">
            <img className="instacam" src={instacam} alt="instagram camera picture" />
            <p className="search line">|</p>
            <img className="instaname" src={instaname} alt="instagram name pic" />
        </div>
    )
};

export default IconSearchBar;