import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

const SearchBar = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#"></a>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullLeft>
            <input type="text" placeholder="search instagram" />
            <Button type="submit">Submit</Button>
        </Navbar.Form>
    </Navbar>
);

export default SearchBar;
