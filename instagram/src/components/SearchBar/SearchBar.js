import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export const SearchBar = props => {
  this.state = {
    isOpen: false
  };

  return (
    <div className="row">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <img src="./Instagram.jpg" />
              <NavLink href="./Instagram.jpg">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
};
      // <input className="SearchBar__Input" placeholder="Search" />
      // <span className="SearchBar__Buttons">
      // <a className="SearchBar__Button" href="/">
      // <i class="far fa-compass fa-2x" />
      // </a>
      // <a className="SearchBar__Button" href="/">
      // <i class="far fa-heart fa-2x" />
      // </a>
      // <a className="SearchBar__Button" href="/">
      // <i class="far fa-user fa-2x" />
      // </a>
      // </span>