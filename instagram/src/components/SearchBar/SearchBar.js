import React from 'react';
import './SearchBar.css';
import {
    
    Navbar,
    
  } from 'reactstrap';

const SearchBar = props => {
    return (
        <Navbar>
            <i class="fab fa-instagram fa-2x"></i>
            <h1>Instagram</h1>
            <input defaultValue="Search" />
            <i class="far fa-compass fa-2x lt"></i>
            <i class="far fa-heart fa-2x lt"></i>
            <i class="far fa-user fa-2x lt"></i>
        </Navbar>

    )
}

export default SearchBar;