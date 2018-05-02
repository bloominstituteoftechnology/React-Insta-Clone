import React from "react";
import "./searchBar.css";

class SearchBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="search-section1">
          <div className="main-icon">
            &part;
          </div>
          <div className="main-logo">
            <em>Instagram</em>
          </div>
        </div>
        <div class="main-search">
          <input
          type="text"
          placeholder="search"
          />
        </div>
        <div class="sub-icon">
          <span>&spades; </span>
          <span>&clubs; </span>
          <span>&diams;</span>
        </div>
      </div>

    )
  }

}

export default SearchBar;