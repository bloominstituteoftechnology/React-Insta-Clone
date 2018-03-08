import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

  export default class SearchBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
      this.brand = 'https://www.instagram.com/static/images/branding/logoWhiteoutLockup.png/54b3cb7339a2.png';
      
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/"><img src={this.brand}></img>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/"></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"></NavLink>
                  </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

//<img>'https://www.instagram.com/static/images/branding/logoWhiteoutLockup.png/54b3cb7339a2.png'></img> */}
