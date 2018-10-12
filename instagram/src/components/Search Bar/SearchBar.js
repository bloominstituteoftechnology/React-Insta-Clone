import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <FontAwesomeIcon icon="search" className="search-icon" />
        <form onSubmit={this.props.handleSearch}>
          <input
            type="text"
            placeholder="Search"
            value={this.props.input}
            onChange={this.props.handleInput}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
