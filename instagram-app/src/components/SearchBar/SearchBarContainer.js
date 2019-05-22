import React from 'react';
import cameraLogo from '../../assets/cameraLogo.svg';
import iglogo from '../../assets/iglogo.png';
import heart from '../../assets/heart.svg';
import compass from '../../assets/compass.svg';
import user from '../../assets/user.svg';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img alt='camera' src={cameraLogo} className="social logo" />
        <img alt="instagram logo" src={iglogo} className="logo-image" />
      </div>
      <div>
        <input className='search-bar' type="text" placeholder= "Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
        <img alt='compass' src={compass} className="logo" />
        </div>
        <div className="social">
          <img alt='heart' src={heart} className="logo" />
        </div>
        <div className="social">
          <img alt='user logo' src={user} className="logo" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;