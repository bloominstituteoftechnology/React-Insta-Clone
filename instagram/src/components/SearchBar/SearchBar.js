import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Form, Input, Label, FormText, Row, Col, Container  } from 'reactstrap';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/fontawesome-free-solid';
import { faHeart as farHeart } from '@fortawesome/fontawesome-free-regular';
import { faComment as farComment } from '@fortawesome/fontawesome-free-regular';
import { faCompass as farCompass } from '@fortawesome/fontawesome-free-regular';
import { faUser as farUser } from '@fortawesome/fontawesome-free-regular';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search input: ', this.state.searchInput);
        this.setState({ searchInput: '' });
    }

    handleSearchInput = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    render() {
        return (
            <Navbar className="justify-content-around">
                    <NavbarBrand>
                         <FontAwesomeIcon icon={faInstagram} className="fa-2x"/>

                        <a href="#"> Lambda School React II</a>
                    </NavbarBrand>
                <Form inline>
                    <Input type="text" placeholder="Search" value={this.state.searchInput} onChange={this.handleSearchInput} />
                </Form>
                <Nav>
                    <NavItem><FontAwesomeIcon icon={farCompass} className="fa-2x" /></NavItem>
                    <NavItem><FontAwesomeIcon icon={farHeart} className="fa-2x"/> </NavItem>
                    <NavItem><FontAwesomeIcon icon={farUser} className="fa-2x"/></NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default SearchBar;