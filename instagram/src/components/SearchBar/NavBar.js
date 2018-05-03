
import React from 'react';
import { Navbar } from 'reactstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="container">
        <input class="search" placeholder="search"/>
    </Navbar>
  );
};



{/*import React from "react";

const SearchBar = props => {
    return (
        <div>
            <h1>Nav Bar </h1>
        </div>
    );
}*/}

export default NavBar;