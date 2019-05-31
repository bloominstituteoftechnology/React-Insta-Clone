import React from 'react';
import logo from '../../images/instagram-logo.png';
import './SearchBar.css'

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input
} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default class SearchBar extends React.Component {
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
            <NavbarBrand href="/"><img src={logo} alt='Logo' /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
                <NavItem className='search-bar'>
                  <FontAwesomeIcon className='search' icon={faSearch} />
                  <Input type="search" placeholder='Search' />
                </NavItem>
                <NavItem>
                    <FontAwesomeIcon className='compass' icon={faCompass} spin />
                    <FontAwesomeIcon className='heart' icon={faHeart} />
                    <FontAwesomeIcon className='user' icon={faUser} />
                </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}