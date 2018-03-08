import React from 'react';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';

  export default class SearchBar extends React.Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
      this.brand = 'https://www.instagram.com/static/images/branding/logoWhiteoutLockup.png/54b3cb7339a2.png';

    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/"><img src={this.brand}></img></NavbarBrand>
          </Navbar>
        </div>
      );
    }
  }
