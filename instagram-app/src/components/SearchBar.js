import React from 'react'
import logo from '../images/instagram-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Input
} from 'reactstrap';

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
                <NavItem>
                    <Input type="search" placeholder="Search" />
                </NavItem>
                <NavItem>
                    <FontAwesomeIcon className='compass' icon='compass' />
                </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}