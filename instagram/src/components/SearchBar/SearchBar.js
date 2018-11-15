import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import styled from 'styled-components';

import Logo from './Logo';
import SearchBox from './SearchBox';
import NavBar from './NavBar';

const StyledSearchBarContainer = styled.div`
width: 100%;
border-bottom: 1px solid lightgray;
`;

const StyledSearchBar = styled.div`
  display: flex;
  max-width: 111.4rem;
  height: 7.6rem;
  padding: 2rem 2rem;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 2.4rem;
  font-weight: 500;
  margin: 0 auto;
`;

const SearchBar = props => {
  return (
    <StyledSearchBarContainer className="search-bar--container">
      <StyledSearchBar className="search-bar">
        <Logo />
        <SearchBox
          searchText={props.searchText}
          handleSearch={(e) => props.handleSearch(e)}
        />
        <NavBar />
      </StyledSearchBar>
    </StyledSearchBarContainer>
  );
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
}

export default SearchBar;
