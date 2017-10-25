import React, { Component } from 'react';
import './App.css';
import { Button, Navbar, FormGroup, FormControl } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
        <Navbar.Header>
        <Navbar.Brand>
        <a href="#"><img src="./assets/insta.png" alt="instagram img"/></a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Navbar.Form pullLeft>
        <FormGroup>
        <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button type="submit">Submit</Button>
        </Navbar.Form>
        </Navbar.Collapse>
        </Navbar>
        <img src="./assets/insta.png" alt="instagram img"></img>
      </div>
        
    );
  }
}

export default App;
