import React from "react";
import Logo from "./Logo";
import Icons from "./Icons";
import SearchBar from "./SearchBar";
import "./NavBar.scss";

const NavBarContainer = props => {
  return (
    <div className="container">
      <div className="navbar-container">
        <Logo />
        <SearchBar />
        <Icons />
      </div>
    </div>
  );
};

export default NavBarContainer;
