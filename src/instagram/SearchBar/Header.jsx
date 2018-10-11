import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <nav className="Nav">
      <div className="Nav-menus">
        <div className="Nav-brand">
          <a className="Nav-brand-logo" href="/">
            Instagram
          </a>
        </div>
        <div className="Nav-search">
          <input
            className="Search"
            type="text"
            placeholder="Search"
            onKeyDown={props.searchPosts}
          />
        </div>

        <div className="Nav-icon-feed" />
        <div className="Nav-icon-heart" />
        <div className="Nav-icon-profile" onClick={props.logoutHandler} />
      </div>
    </nav>
  );
};

export default Header;
