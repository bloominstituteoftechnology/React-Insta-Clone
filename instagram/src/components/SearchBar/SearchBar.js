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
            <img
              className="Nav-Brand-Words"
              src={"http://jonathanjeter.com/images/Instagram_Logo_Large.png"}
            />

            <InputGroup>
              <InputGroupAddon addonType="prepend" />
              <Input placeholder="search" />
            </InputGroup>
            <img
              className="right-logo"
              src={
                "https://pixel.nymag.com/imgs/daily/selectall/2016/12/29/inst1.nocrop.w710.h2147483647.png"
              }
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
