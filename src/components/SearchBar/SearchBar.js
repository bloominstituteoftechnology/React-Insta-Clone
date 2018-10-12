import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="nav-container">
        <nav>
          <ul>
          <i className="fab fa-instagram"></i>
            <li className="logo-text">| Instagram</li>
            <input className="onlyInput" placeholder="Search" />
            <div className="right-nav">
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SearchBar;
