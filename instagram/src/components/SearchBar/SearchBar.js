import React, { Component } from 'react'
import './SearchBar.css';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Form, Input, Label, FormText, Row, Col, Container  } from 'reactstrap';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/fontawesome-free-solid';
import { faHeart as farHeart } from '@fortawesome/fontawesome-free-regular';
import { faComment as farComment } from '@fortawesome/fontawesome-free-regular';
import { faCompass as farCompass } from '@fortawesome/fontawesome-free-regular';
import { faUser as farUser } from '@fortawesome/fontawesome-free-regular';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
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
            <Container fluid className="sticky-top bg-white border-bottom align-items-center d-flex flex-column">
            <Navbar className="SearchBar w-100" light color="faded">
                    <NavbarBrand href="#" className="SearchBar__branding">
                         <FontAwesomeIcon icon={faInstagram} className=""/>
                         <span className="SearchBar__text">|</span>
                         <span className="SearchBar__text">Lambdagram</span>
                    </NavbarBrand>
                <Form inline className="SearchBar__input">
                    <Input className="bg-light" type="text" placeholder="Search" value={this.state.searchInput} onChange={this.handleSearchInput} />
                </Form>
                <Nav navbar className="SearchBar__nav justify-content-end flex-row">
                    <NavItem><NavLink href="#"><FontAwesomeIcon icon={farCompass} className="fa-2x" /></NavLink></NavItem>
                    <NavItem><NavLink href="#"><FontAwesomeIcon icon={farHeart} className="fa-2x"/></NavLink> </NavItem>
                    <NavItem><NavLink href="#"><FontAwesomeIcon icon={farUser} className="fa-2x"/></NavLink></NavItem>
                </Nav>
            </Navbar>
            </Container>
        )
    }
}

export default SearchBar;