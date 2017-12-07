import React, {Component} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import "./SearchBar.css";

const SearchBar = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Instagram</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullLeft>
            <input type='text' placeholder='Search'/>
            <Button type="submit">Seach</Button>
        </Navbar.Form>
    </Navbar>
);

export default SearchBar;