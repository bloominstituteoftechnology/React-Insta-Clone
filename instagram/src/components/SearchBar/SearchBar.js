import React from 'react';
import './SearchBar.css';
import instagram from '../../assets/instagram.png';
import { Button } from 'reactstrap';
 
function SearchBar(props) {
    return (
        <div className="header-search-bar">
            <div className="camera-icon">
                <i className="fab fa-instagram"></i>
            </div>
            <span className="vertical-line"></span>
            <div className="logo-text">
                <img src={instagram} alt="logo" className="instagram-logo" height="200"/>
            </div>
            <div className="search-bar-wrapper">
                <span className="fa fa-search"></span>
                <input type="text" placeholder="Search" className="search-bar" name='search'  onChange={props.handleInput}/>
            </div>
            <div className="social-wrapper">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
                <Button onClick = {props.logOutClick} size = "small">Log out</Button>
            </div>
        </div>
    );
};
 export default SearchBar; 