import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchBarContainer">
        <div className="searchBarLogo">
          <div className="instaIcon">
            <i class="fab fa-instagram" />
          </div>
          <div className="searchBarLogoText">Instagram</div>
        </div>
        <input type="search" className="search" value="Search" />
        <div className="icons">
          <i class="far fa-compass" />
          <i class="far fa-heart" />
          <i class="far fa-user" />
        </div>
      </div>
    );
  }
}

export default SearchBar;