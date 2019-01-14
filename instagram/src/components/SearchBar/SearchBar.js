import React, { Component } from 'react';
import Logo from '../logo.png'

const SearchBar = props =>{
    return (
      <div className="search-bar">
        <div className="col main-logo">
            <i class="fab fa-instagram"/>
            <img src={Logo} alt=""/>
        </div>
        <div className="col search-input">
            <input placeholder="Search" type="text"/>
        </div>
        <div className="col act-logos">
            <i class="far fa-compass"/>
            <i class="far fa-heart"/>
            <i class="far fa-user"/>
        </div>
       
      </div>
    );
}

export default SearchBar;
