import React, { Component } from "react";

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
  DropdownItem,
  Input
} from "reactstrap";
// import PropTypes from "prop-types";
import styled from "styled-components";

const NavbarStyle = styled.div`
  .far {
    font-size: 20px;
    color: gray;
    margin: 0 5px;
    cursor: pinter;
  }
  .fab {
    font-size: 30px;
    padding-right: 15px;
    border-right: 1px solid black;
    line-height: 25px;
    cursor: pinter;
  }
`;

class InstaNavbar extends Component {
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
      <NavbarStyle>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <i className="fab fa-instagram" />
            <span style={{ paddingLeft: "15px" }}>Instagram</span>
          </NavbarBrand>
          <NavbarBrand className="ml-auto">
            <Input placeholder="Search" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">
                  <i className="far fa-compass" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  <i className="far fa-heart" />
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i className="far fa-user" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </NavbarStyle>
    );
  }
}

// InstaNavbar.propTypes = {};

export default InstaNavbar;
