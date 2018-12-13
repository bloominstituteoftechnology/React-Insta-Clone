import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import './SearchBar.css';

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
        <Navbar color="light" light expand="md" className="SearchBar">
          <NavbarBrand href="/">
            <div className="NavLeft">
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                size="sm"
                className="icon"
              />
              <div className="brand">Instagram</div>
              <input type="text" className="searchInput" placeholder="Search"/>                
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <FontAwesomeIcon
                    icon={['fas', 'compass']}
                    size="lg"
                    className="navIcon"
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  <FontAwesomeIcon
                      icon={['fas', 'heart']}
                      size="lg"
                      className="navIcon"
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  <FontAwesomeIcon
                    icon={['fas', 'user']}
                    size="lg"
                    className="navIcon"
                  />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};

export default SearchBar;