import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <input className="Search" type="text" placeholder="Search" />

          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/">
              Instagram
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
