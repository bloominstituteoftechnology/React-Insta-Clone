import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../images/insta-header.png';
import { Compass, Heart, User } from 'react-feather';
import { Navbar } from 'reactstrap';
import './Header.scss';

const Header = () => {
  return (
    <Navbar className="header">
      <a href="/"><img src={logo} alt="Instagram Logo"/></a>
      <SearchBar />
      <div className="header-icons">
        <a href="#"><Compass /></a>
        <a href="#"><Heart /></a>
        <a href="#"><User /></a>
      </div>
    </Navbar>
  );
};

export default Header;
