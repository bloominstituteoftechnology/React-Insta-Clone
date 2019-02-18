import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../images/insta-header.png';

const Header = () => {
  return (
    <header className="header">
      <a href="/"><img src={logo} alt="Instagram Logo"/></a>
      <SearchBar />
      <div className="header-icons">
        <a href="#">location</a>
        <a href="#">heart</a>
        <a href="#">profile</a>
      </div>
    </header>
  );
};

export default Header;
