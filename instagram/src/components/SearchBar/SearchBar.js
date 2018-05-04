/** THIS IS IN ITS TOTALLITY A 'REACTSTRAP' COMPONENT */
import React from 'react';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import MdChatBubbleOutline from 'react-icons/lib/md/chat-bubble-outline';
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
    FormGroup,
    Input } from 'reactstrap';
import './SearchBar.css'

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
  componentDidMount(){
      document.querySelector('.navbar').style.padding = '0 6rem'
  }
  render() {
    return (
      <div className="">
        <Navbar className="d-flex justify-content-between align-items-center" color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            {/* <Label for="exampleSearch">Search</Label> */}
            <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
            <FaHeartO /> <MdChatBubbleOutline />
        </Navbar>
      </div>
    );
  }
}
