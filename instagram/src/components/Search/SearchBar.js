import React from 'react';
import { SearchBarInput } from './../Styled/styled';

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.searchPosts}>
        <SearchBarInput
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
