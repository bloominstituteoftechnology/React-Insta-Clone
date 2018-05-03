import React from 'react';
import logo from './instagram-1.svg';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="d-flex
    sticky-top 
    justify-content-between
    align-items-center 
    search-bar">
      <div className="d-flex align-items-center">
        <i className="fab fa-instagram fa-3x"></i>
        <img src={logo} alt="Instagram" />
      </div>
      <input id="search" 
        name="search" 
        type="search" 
        placeholder="Search..." 
      />
      <div className="d-flex justify-content-between search-icons">
        <i className="far fa-compass fa-lg"></i>
        <i className="far fa-heart fa-lg"></i>
        <i className="far fa-user fa-lg"></i>
      </div>
    </div>
  )
}

export default SearchBar;
