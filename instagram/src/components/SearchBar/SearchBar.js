import React from "react";
import "./SearchBar.css";
import { InputGroup, Input, InputGroupAddon } from "reactstrap";

class SearchBar extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <img
              className="Nav-Brand-logo"
              src={
                "https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png"
              }
            />
            <InputGroup>
              <InputGroupAddon addonType="prepend" />
              <Input placeholder="search" />
            </InputGroup>
          </div>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
