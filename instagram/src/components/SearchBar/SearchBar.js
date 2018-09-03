import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar_left">
          <h1>Instagram</h1>
        </div>
        <div className="SearchBar_middle">
          <input type="text" placeholder="Search" />
        </div>
        <div className="SearchBar_right">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
