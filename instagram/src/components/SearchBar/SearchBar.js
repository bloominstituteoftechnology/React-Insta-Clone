import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl } from 'react-bootstrap';
import logo from './instagram-text-logo.png';
// import icon from './instagram-icon.png'


class SearchBar extends Component {
    render() {
        return (
        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand style={{width: 100}}>
                    <img src={logo} alt="instagram logo"/>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        icon one
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        icon two
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        icon three
                    </NavItem>
                </Nav>
                <Navbar.Form>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>{' '}
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default SearchBar;