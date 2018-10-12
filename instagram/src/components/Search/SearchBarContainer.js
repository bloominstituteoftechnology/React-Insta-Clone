import React from 'react';
import SearchBarLogo from './SearchBarLogo';
import SearchBar from './SearchBar';
import SearchBarIcons from './SearchBarIcons';
import { SearchBarWrapper } from './../Styled/styled';
import './searchBar.css';

class SearchBarContainer extends React.Component {
  render() {
    return (
      <SearchBarWrapper>
        <SearchBarLogo />
        <SearchBar
          handleSearchInput={this.props.handleSearchInput}
          searchPosts={this.props.searchPosts}
          searchInput={this.props.searchInput}
        />
        <SearchBarIcons />
      </SearchBarWrapper>
    );
  }
}

export default SearchBarContainer;
