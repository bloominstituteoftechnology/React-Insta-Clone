
import React from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import InstaImage from '../../assets/insta.png';
import InstaCam from '../../assets/instacam.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <Navbar className="nav-wrapper">
      <NavbarBrand>
        <div className="logo-layout">
          <div className="insta-cam-logo-wrapper">
            <img className="logo" src={InstaCam} />
          </div>
          |
          <div className="insta-logo-wrapper">
            <img className="logo" src={InstaImage} />
          </div>
        </div>
      </NavbarBrand>
      <Nav>
        <input className="fancy-search" type="text" placeholder="search" />
      </Nav>
      <Nav>
        <NavItem>
          <NavLink href="/">icon</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default SearchBar;