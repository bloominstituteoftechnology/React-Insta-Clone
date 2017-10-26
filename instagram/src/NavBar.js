import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';

const NavBarComponent = (props) => {
    return (<Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <img alt="instagram-logo" style={{padding: '10px 0'}} src="https://github.com/lightofdavinci/photo/blob/master/instagram.jpg?raw=true" />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" 
                      placeholder="Search"
                      value={props.searchInput}
                      onChange={props.handleSearchChange} />
        </FormGroup>
        {' '}
        <Button type="submit" onClick={props.handleSearchSubmit}>Search</Button>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>);
}

export default NavBarComponent;