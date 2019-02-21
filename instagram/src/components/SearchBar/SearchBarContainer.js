import React from 'react';
import Logo from '../../assets/newlogo.svg';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img alt="instagram logo" src={Logo} className="logo-image" />
        <img alt="instagram logo text" src={IGLogo} className="logo-image-text" />
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;