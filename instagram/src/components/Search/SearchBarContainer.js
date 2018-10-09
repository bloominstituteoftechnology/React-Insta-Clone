import React from 'react';
import SearchBarLogo from './SearchBarLogo';
import SearchBar from './SearchBar';
import SearchBarIcons from './SearchBarIcons';
import './searchBar.css';

class SearchBarContainer extends React.Component {
  render() {
    return (
      <div className="searchBar">
        <SearchBarLogo />
        <SearchBar
          handleSearchInput={this.props.handleSearchInput}
          searchPosts={this.props.searchPosts}
          searchInput={this.props.searchInput}
        />
        <SearchBarIcons />
      </div>
    );
  }
}

export default SearchBarContainer;
