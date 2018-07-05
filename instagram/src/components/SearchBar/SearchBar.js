import React, { Component } from 'react';
import logo from '../../img/logo.png';
import logoName from '../../img/instagram.png';
import explore from '../../img/explore.png';
import heart from '../../img/heart.png';
import man from '../../img/man.png';
import './SearchBar.css';
import { Navbar, NavbarBrand, Nav, NavItem, Input} from "reactstrap";

class SearchBar extends Component {
  render() {
    return (
        <Navbar className="nav-container">
            <NavbarBrand>
                <div>
                    <img src={logo} alt=''/>
                    <img className="nav-logo-name" src={logoName} alt=''/>
                </div>
            </NavbarBrand>
            <Nav>
                <Input placeholder="search" />
            </Nav>
            <Nav>
                <NavItem>
                    <img src={explore} alt=''/>
                </NavItem>
                <NavItem className="nav-img">
                    <img src={heart} alt=''/>
                </NavItem>
                <NavItem>
                    <img src={man} alt=''/>
                </NavItem>
            </Nav>
        </Navbar>  
    );
  }
}

export default SearchBar;
