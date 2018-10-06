import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      input: ""
    };
  }

  onFocus = event => {
    event.target.value = "";
    event.target.classList.add("no-background");
  };
  onBlur = event => {
    event.target.value = "Search";
    event.target.classList.remove("no-background");
  };

  render() {
    return (
      <div className="search-bar">
        <div className="logo">
          <div className="logo-img">
            <i className="fab fa-instagram" />
          </div>
          <div className="logo-name">Instagram</div>
        </div>
        <input
          type="search"
          className="search"
          defaultValue="Search"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.props.searchInputHandler}
          onKeyDown={this.props.searchHandler}
        />
        <div className="icons">
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
