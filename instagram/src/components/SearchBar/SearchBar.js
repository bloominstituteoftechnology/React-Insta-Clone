import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar-container">
        <div className="search-bar">
          <div className="search-logo">
            <i className="fab fa-instagram" />
            <span className="search-line" />
            <h1>Instagram</h1>
          </div>
          <form action="">
            <input
              type="text"
              placeholder="Search"
              onChange={this.props.handleSearchInput}
              value={this.props.filterTarget}
              name="filterTarget"
            />
          </form>
          <div className="search-icons">
            <i className="far fa-compass" />
            <i className="far fa-heart" />
            <i className="far fa-user" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
