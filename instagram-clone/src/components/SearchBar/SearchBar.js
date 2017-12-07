import React from 'react';
import { Navbar } from 'react-bootstrap';

const SearchBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Instagram</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Form pullLeft>
        <input type="text" placeholder="Search" />
    </Navbar.Form>
  </Navbar>
);

export default SearchBar;