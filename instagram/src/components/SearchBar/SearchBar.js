import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = { searchTerm: ''};
  }

  handleAddSearch = e => {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmitSearch = () => {
    this.props.searchPosts(this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <input
          name="searchBar"
          value={this.state.searchTerm}
          placeholder="Search"
          onChange={this.handleAddSearch}
        />
        <button onClick={this.handleSubmitSearch}>Search Posts</button>
      </div>
    );
  }
}

export default SearchBar;
