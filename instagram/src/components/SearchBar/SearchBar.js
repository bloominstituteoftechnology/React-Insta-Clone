import React from 'react';
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
  Container} from 'reactstrap';
  import './searchbar.css';

  class SearchBar extends React.Component {
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
        <div className="searchcontainer">
          <Navbar color="#E1E4E8" light expand="md">
            <div className={"logo"}>
              <i class="fab fa-instagram" />
            </div>
            <NavbarBrand href="/" className={"title"}>
              Instagram
            </NavbarBrand>
            <div className={"searchfield"}>
              <input
                className={"search"}
                onChange={this.props.filter}
                onKeyDown={this.props.buttonPress}
                value={this.props.searchText}
                type="text"
                placeholder="&#xf002; Search"
              />
            </div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavLink>
                  <i class="far fa-compass" />
                </NavLink>
                <NavLink>
                  <i class="far fa-heart" />
                </NavLink>
                <NavLink>
                  <i class="far fa-user" />
                </NavLink>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
  
  export default SearchBar;