import React from 'react';
import './SearchBar.css';

import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';


const SearchBar = () => {
  return (
    <div className='navigation'>
      <Navbar>
        <NavbarBrand>
          <div>
            <img className='instagram-logo' src="https://png.icons8.com/metro/50/000000/instagram-new.png" alt='' />
            <img className='instagram-word' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='' />
          </div>
        </NavbarBrand>
        <Nav>
          <input className='instagram-search' type='text' placeholder='Search' />
        </Nav>
        <Nav className='instagram-icons'>
          <NavItem>
            <i className="far fa-compass fa-lg"></i>
          </NavItem>
          <NavItem>
            <i className="far fa-heart fa-lg"></i>
          </NavItem>
          <NavItem>
            <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/137578-200.png' alt='' />
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default SearchBar;