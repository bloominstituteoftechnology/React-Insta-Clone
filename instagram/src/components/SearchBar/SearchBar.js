import React from 'react';
import {Navbar} from 'reactstrap';
import './SearchBar.css';
import logo from './img/instagram-new-logo.png'

const SearchBar = props => {
  return (
    <Navbar color='light'>
      <img src={logo} height='48px'/>
      <input placeholder='Search' />
    </Navbar>
  );
};

export default SearchBar;
