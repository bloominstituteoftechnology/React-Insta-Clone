import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <div className="logo">
          <div className="logo-img">
            <i class="fab fa-instagram" />
          </div>
          <div className="logo-name">Instagram</div>
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
