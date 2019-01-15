import React from 'react';
import Logo from '../logo.png'
import PropTypes from 'prop-types';

const SearchBar = props =>{
    return (
      <div className="search-bar">
        <div className="col main-logo">
            <i className="fab fa-instagram"/>
            <img src={Logo} alt=""/>
        </div>
        <div className="col search-input">
            <input placeholder="&#128269; &f002; Search " type="text"/>
        </div>
        <div className="col act-logos">
            <i className="far fa-compass"/>
            <i className="far fa-heart"/>
            <i className="far fa-user"/>
        </div>
       
      </div>
    );
}

export default SearchBar;
