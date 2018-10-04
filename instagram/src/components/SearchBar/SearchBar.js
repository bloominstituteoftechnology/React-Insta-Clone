import React from 'react';
import './SearchBar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

const SearchBar = props => {
    return (
        <Navbar>
            <i class="fab fa-instagram"></i>
            <h1>Instagram</h1>
            <input defaultValue="Search" />
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
        </Navbar>

    )
}

export default SearchBar;