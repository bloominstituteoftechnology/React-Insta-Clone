import React, { Component } from 'react';
import {Navbar, FormGroup, Button} from 'react-bootstrap';





// class SearchBar extends Component {}

const SearchBar = (props) => {
  return (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Instagram</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form >
        <FormGroup>
          <input type="text" placeholder="Search" />
        </FormGroup>{' '}
        <Button type="submit">Submit</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
  );

}

export default SearchBar;