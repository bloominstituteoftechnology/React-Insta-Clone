import React from 'react';
import styled from "styled-components";

export const SearchBar = styled.input`
  height: 25px;
  width: 180px;
  border: 1px solid darkgray;
  border-radius: 3px;
  padding: 2px 15px;
  margin-right: 20px;

  &::-webkit-input-placeholder {
    text-align: center;
    font-size: 14px;
    color: lightgray;
  }
`;

const SearchBarWrapper = props => {
  return <SearchBar placeholder="Search"
                    type="text"
                    onChange={props.search}>
        </SearchBar>;
}

export default SearchBarWrapper;
