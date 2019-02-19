import React from 'react';
import Logo from '../../assets/logo.png';
import IGLogo from '../../assets/iglogo.png';
import Safari from '../../assets/safari.png';
import Heart from '../../assets/heart.png';
import Friend from '../../assets/friend.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img alt="instagram logo" src={Logo} className="logo-image" />
        <img alt="instagram logo text" src={IGLogo} className="logo-image-text" />
      </div>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <img alt="instagram logo" src={Safari}  className="fa fa-compass" />
        </div>
        <div className="social">
          <img alt="instagram logo" src={Heart} className="fa fa-heart" />
        </div>
        <div className="social">
          <img alt="instagram logo" src={Friend} className="fa fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;