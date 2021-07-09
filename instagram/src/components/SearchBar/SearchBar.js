import React from 'react';
import SearchBarLogos from './SearchBarLogos';
import SearchBarForm from './SearchBarForm';
import SearchBarActions from './SearchBarActions';
import styled from 'styled-components';

const SearchBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 25px 30px;
  border-bottom: 1px solid #e2e2e2;
`;

const SearchBar = (props) => {
  return(
    <SearchBarDiv>
      <SearchBarLogos />
      <SearchBarForm onSearchPosts={props.onSearchPosts} />
      <SearchBarActions />
    </SearchBarDiv>
  );
};

export default SearchBar;