import React from 'react';
import styled from 'styled-components';

const SearchBarInput = styled.input`
  height: 25px;
  width: 180px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px 15px;
  margin: 0 10px;

  &::placeholder {
    text-align: center;
    font-size: 14px;
    color: black;
  }
`;

const SearchBar = props => {
  return (
    <div className="search-bar">
      <SearchBarInput
        className="search"
        placeholder="Search"
        type="text"
        onChange={props.searchHandler}
      />
    </div>
  );
};

export default SearchBar;
