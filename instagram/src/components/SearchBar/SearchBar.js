import React from 'react';
import logo from '../../assets/instagram-logo.png'
import './SearchBar.css'

const SearchBar = () => (
  <div className="search-bar">
    <div className="search-bar__wrapper">
    <div className="search-bar__brand">
      <img src={logo} />
      <div className="search-bar__brand__wordmark">
        <h1> Instagram </h1>
      </div>
    </div>
    <div className="search-bar__search">
      <input type="text" placeholder="Search" />
    </div>
    <div className="search-bar__icons">
    </div>
    </div>
  </div>
)

export default SearchBar;