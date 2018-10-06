import React from 'react';
import './Searchbar.css';
import instacam from './instacam.png';
import instaname from './instaname.png'


const IconSearchBar = (props) => {
    return (
        <div className="icon-container">
            <a href="#"><img className="instacam" src={instacam} alt="instagram camera picture" /></a>
            <p className="search line">|</p>
            <a href="#"><img className="instaname" src={instaname} alt="instagram name pic" /></a>
        </div>
    )
};

export default IconSearchBar;