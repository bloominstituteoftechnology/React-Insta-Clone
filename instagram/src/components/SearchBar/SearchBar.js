import React from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import Instagram_logo from '../../images/Instagram_logo.png';
import GramCam from '../../images/GramCam.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <Navbar className="nav-holder sticky-top">
      <NavbarBrand>
        <div className="row">
          <div className="col-4 gram-cam">
            <img className="logo" src={GramCam} alt="gramCam"/>
          </div>
          <div className="col-4 instagram_logo">
            <img className="logo" src={Instagram_logo} alt="instagram_logo"/>
          </div>
        </div>
      </NavbarBrand>
      <Nav>
        <input className="form-control" type="text" placeholder="search" />
      </Nav>
      <Nav>
        <NavItem className="row">
          <NavLink href="/"><i className="far fa-compass"></i></NavLink>
          <NavLink href="/"><i className="far fa-heart"></i></NavLink>
          <NavLink href="/"><i className="far fa-user"></i></NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default SearchBar;