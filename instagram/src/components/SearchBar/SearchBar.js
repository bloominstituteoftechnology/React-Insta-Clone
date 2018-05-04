import React from 'react';
import './SearchBar.css';
import instagramLogoText from './assets/instagramLogoText.png';

const SearchBar = props => {
  return (
    <nav className="search-bar">
      <div className="container">
        <div className="row search-bar-wrapper">
          <div className="col-3 logo">
            <i className="fab fa-instagram"></i>
            <div className="text-logo">
              <img src={instagramLogoText} alt="Instagram Logo" />
            </div>
          </div>
          <div className="col-6 search">
            <input
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="col-3 icons">
            <i className="far fa-dot-circle"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;