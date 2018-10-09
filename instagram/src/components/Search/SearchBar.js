import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.searchPosts}>
        <input
          className="searchBarInput"
          placeholder="&#x1F50D; Search"
          value={this.props.searchInput}
          onChange={this.props.handleSearchInput}
        />
      </form>
    );
  }
}

export default SearchBar;
