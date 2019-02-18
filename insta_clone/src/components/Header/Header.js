import React from 'react';
import './header.css';
import Logo from '../../img/image.png';
import Profile from '../../img/icons.png';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="" />
      <SearchBar />
      <img src={Profile} alt="" />
    </header>
  );
}

export default Header;
