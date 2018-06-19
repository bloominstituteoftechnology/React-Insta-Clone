import React from 'react';
import './SearchBar.css';
import logo from './img/instagram-header.png';

function SearchBar (props) {
    return (
        <div className="search-bar">
        <div className="left-header-content">
        <a href="#">
            <div className="logo">
        <div className="logo-icon"><i class="fab fa-instagram"></i></div>

          <img src={logo} className="logo-text"></img>
            </div>
          </a>
        </div>
        <div className="search-input">
          <input id="search-input" type="text" placeholder="Search" />
          </div>
          <div className="right-header-content">
          <div className="navigation"><a href="#"><i class="far fa-compass"></i></a></div>
          <div className="like"><a href="#"><i class="far fa-heart"></i></a></div>
          <div className="profile"><a href="#"><i class="far fa-user"></i></a></div>

          </div>
        </div>
    );
}

export default SearchBar;