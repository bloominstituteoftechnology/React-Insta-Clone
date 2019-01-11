import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="input">
        <input
          className="searchbar"
          type="search"
          placeholder="Search"
          value={this.props.searchInput}
          onChange={this.props.search}
        />
      </div>
    );
  }
}

export default SearchBar;
