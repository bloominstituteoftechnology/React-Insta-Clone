import React from 'react';
import './SearchBar.css';
import InstagramLogo from './images/InstagramLogo';
import line from './images/line.png';
import compass from './images/compass.jpg';
import heart from './images/heart.jpg';
import person from './images/person.png';

const SearchBar = () => {
  return (
    <div>
      <div className="header-left">
        <img src={InstagramLogo} className="logo" alt="logo" />
        <img src={line} className="line" alt="line" />
        <div className="instagram">Instagram</div>
      </div>
      <input className="search-bar" />
      <div>
        <img src={compass} className="compass" alt="compass" />
        <img src={heart} className="heart" alt="heart" />
        <img src={person} className="person" alt="person" />
      </div>
    </div>
  );
};

export default SearchBar;
