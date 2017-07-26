import React from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
import { Navbar, FormGroup, FormControl, Button, Nav } from 'react-bootstrap';
import './SearchBar.css';
import FontAwesome from 'react-fontawesome';

class SearchBar extends React.Component {
  render() {
  return (
    <div>
      <Navbar fluid>
        <Navbar.Header>
          <FontAwesome name="instagram" className="insta" size="2x" />
          <Navbar.Brand pullRight>
            <span className="brand">Instagram</span>
          </Navbar.Brand>
        </Navbar.Header>
          <Navbar.Form>
            <FormGroup>
              <FormControl className="sear" type="text" placeholder="Search" />
            </FormGroup>
          </Navbar.Form>
          <span><FontAwesome className="compass" name="compass" size="2x" /></span>
          <span><FontAwesome className="hearts" name="heart-o" size="2x" /></span>
          <span><FontAwesome className="user" name="user-o" size="2x" /></span>
      </Navbar>
    </div>
  );
  }
}

export default SearchBar;
