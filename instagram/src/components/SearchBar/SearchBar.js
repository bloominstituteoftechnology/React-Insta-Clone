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
  import './searchbar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
        <div className={'logo'}><i class="fab fa-instagram"></i></div>
          <NavbarBrand href="/" className={'title'}>Instagram</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavLink><i class="far fa-compass"></i></NavLink>
          <NavLink><i class="far fa-heart"></i></NavLink>
          <NavLink><i class="far fa-user"></i></NavLink>
          </Nav>
           

          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default SearchBar;