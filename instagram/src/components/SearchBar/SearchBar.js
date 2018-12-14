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
      isOpen: false,
      searchInput: ""
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  setSearchInput = (event) => {
    this.setState({searchInput: event.target.value});
  }

  searchUsername = (event) => {
    event.preventDefault();
    const users = this.props.users.slice();
    const searchResult = users.filter(user => user.username.includes(this.state.searchInput));
    this.props.update(searchResult);
  }

  render() {
    return (
      <div className="SearchBar">
        <Navbar expand="md">
          <NavbarBrand href="/">
            <div className="NavLeft">
              <FontAwesomeIcon
                icon={['fab', 'instagram']}
                size="sm"
                className="icon"
              />
              <div className="brand">Instagram</div>
            </div>
          </NavbarBrand>
          <form onSubmit={this.searchUsername}>
            <input type="text" className="searchInput" placeholder="Search" onChange={this.setSearchInput} value={this.state.searchInput} />                
            <input type="submit" hidden />
          </form>
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