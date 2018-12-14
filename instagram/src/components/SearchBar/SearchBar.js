import React from 'react';
import {Navbar} from 'reactstrap';
import './SearchBar.css';
import logo from './img/instagram-new-logo.png';
import logoCam from './img/icons8-instagram-50.png';
import logoUser from './img/icons8-user-64.png';
import logoHeart from './img/icons8-heart-50.png';
import logoCompass from './img/icons8-compass-filled-50.png';

const SearchBar = props => {
  return (
    <Navbar className='search-bar' color='light'>
      <div>
        <img src={logoCam} height='32px'/>
        <img src={logo} height='48px'/>
      </div>
      <div>
        <input placeholder='Search' />
      </div>
      <div>
        <img src={logoCompass} height='32px'/>
        <img src={logoHeart} height='32px'/>
        <img src={logoUser} height='32px'/>
      </div>
    </Navbar>
  );
};

export default SearchBar;
