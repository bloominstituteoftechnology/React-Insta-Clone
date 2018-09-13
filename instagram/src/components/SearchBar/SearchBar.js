import React from "react";
import "./SearchBar.css";
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";
import InstaCam from "../../assets/Instacam.png";
import InstaImage from "../../assets/insta.png";

const SearchBar = props => {
  return (
    <Navbar className="nav-wrapper">
      <NavbarBrand>
        <div className="logo-layout">
          <div className="insta-cam-logo-wrapper">
            <img className="logo" src={InstaCam} />
          </div>
          |
          <div className="insta-logo-wrapper">
            <img src={InstaImage} className="logo" />
          </div>
        </div>
      </NavbarBrand>
      <nav>
        <input type="text" placeholder="search" onKeyDown={props.searchPosts} />
      </nav>
      <Nav>
        <NavItem>
          <NavLink href="/">Icon</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default SearchBar;
