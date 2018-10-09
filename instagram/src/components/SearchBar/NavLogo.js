import React from "react";
import igTextLogo from "../../images/text-logo.png";
import "./SearchBar.css";

const NavLogo = () => {
  return (
    <div className="nav-logo">
      <i className="fab fa-instagram" />
      <div className="line-between" />
      <img src={igTextLogo} alt="Instagram Text Logo" />
    </div>
  );
};

export default NavLogo;
