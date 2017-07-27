import React from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';
import './SearchBar.css';
import FontAwesome from 'react-fontawesome';

class SearchBar extends React.Component {
  render() {
  return (
    <div id='top'>
      <Navbar fluid>
        <Navbar.Header>
          <a href='#top'><FontAwesome name="instagram" className="insta" size="2x" /></a>
          <Navbar.Brand pullRight>
            <span className="brand"><a href='#top'>Instagram</a></span>
          </Navbar.Brand>
        </Navbar.Header>
          <Navbar.Form>
            <FormGroup>
                <input className='forTest' />
              <FormControl className="sear" type="text" placeholder="Search" />
            </FormGroup>
          </Navbar.Form>
          <span><a href='#top'><FontAwesome className="compass" name="compass" size="2x" /></a></span>
          <span><a href='#top'><FontAwesome className="hearts" name="heart-o" size="2x" /></a></span>
          <span><a href='#top'><FontAwesome className="user" name="user-o" size="2x" /></a></span>
      </Navbar>
    </div>
  );
  }
}

export default SearchBar;
