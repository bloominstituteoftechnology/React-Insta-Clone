import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = { searchTerm: ''};
  }

  handleAddSearch = e => {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <input
        name="searchBar"
        value={this.state.searchTerm}
        placeholder="Search"
        onChange={this.handleAddSearch}
      />
    );
  }
}

export default SearchBar;
