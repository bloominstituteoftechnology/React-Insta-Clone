import React from 'react';
import {  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class LogOutMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  logOut(){
    localStorage.setItem('user', '');
    window.location.reload();
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} size='sm' direction="right">
        <DropdownToggle caret />
        <DropdownMenu>
          <DropdownItem onClick={this.logOut}>Log Out</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}