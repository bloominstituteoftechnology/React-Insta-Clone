import React from 'react';
import './SearchBar.css';
import Logo from './../../assets/insta-logo.png';
import LogoName from './../../assets/insta-name.png';
import Compass from './../../assets/insta-compass.png';
import Heart from './../../assets/insta-heart.png';
import User from './../../assets/insta-person.png';

const SearchBar = props => {
  return (
    <div className="SearchBar">
      <div className="logo">
        <img src={Logo} className="insta-logo" alt="instagram logo" />
        <p>|</p>
        <img src={LogoName} className="insta-name" alt="instagram text logo" />
      </div>

      <input className="search" type="text" placeholder="Search" />

      <div className="user">
        <img src={Compass} className="compass" alt="compass" />
        <img src={Heart} className="heart" alt="heart" />
        <img src={User} className="person" alt="person" />
      </div>
    </div>
  );
};

export default SearchBar;