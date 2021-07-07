import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div>
      <Navbar className="sticky">
        <div className="navBrandItems">
          <NavbarBrand>
            <span className="navTitle">Instagram</span>
          </NavbarBrand>
        </div>
        <form action="">
          <input type="text" placeholder="Search" />
        </form>
      </Navbar>
    </div>
  );
};

export default SearchBar;