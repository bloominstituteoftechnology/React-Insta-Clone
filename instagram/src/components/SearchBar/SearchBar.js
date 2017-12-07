import React from 'react';
import { Navbar, Button } from '/instagram/node_modules/react-bootstrap';

const SearchBar = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">React Bootstrap Example</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullLeft>
            <input type="text" placeholder="Bootstrap Input" />
            <Button type="submit">Submit</Button>
        </Navbar.Form>
    </Navbar>
);

export default SearchBar;
