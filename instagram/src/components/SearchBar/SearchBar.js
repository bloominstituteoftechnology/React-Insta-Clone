import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import InstaImage from '../../assets/insta.png';
import InstaCam from '../../assets/instacam.png';
import './Search.css';

class SearchBar extends Component {
    render() {
        return (
            <Navbar className="nav-wrapper">
                <NavbarBrand>
                    <div className="logo-layout">
                        <div className="insta-cam-logo-wrapper">
                            <img className="logo" src={ InstaCam } />
                        </div>
                        |
                        <div className="insta-logo-wrapper">
                            <img className="insta-script" src={ InstaImage } />
                        </div>
                    </div>
                </NavbarBrand>
                <Nav>
                    <input className="search-field" type="text" placeholder="Search" />
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink class="fab fa-instagram"></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default SearchBar;