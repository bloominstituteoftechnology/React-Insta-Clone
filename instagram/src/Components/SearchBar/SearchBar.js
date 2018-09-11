import React from 'react';
import './SearchBar.css';
import CameraLogo from './images/CameraLogo.png';
import InstagramLogo from './images/InstagramLogo.png';
import line from './images/line.png';
import compass from './images/compass.jpg';
import heart from './images/instaheart.png';
import person from './images/person.png';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="header-left">
        <img src={CameraLogo} className="logo" alt="logo" />
        <img src={line} className="line" alt="line" />
        <img src={InstagramLogo} className="instagram" />
      </div>
      <input className="search-bar-input" />
      <div className="social-search-bar">
        <img src={compass} className="compass" alt="compass" />
        <img src={heart} className="heart" alt="heart" />
        <img src={person} className="person" alt="person" />
      </div>
    </div>
  );
};

export default SearchBar;
