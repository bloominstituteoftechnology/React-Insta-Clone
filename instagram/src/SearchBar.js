import React from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="https://www.instagram.com/?hl=en">Instagram</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
  }
}

export default SearchBar;
