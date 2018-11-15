import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const SearchBarInput = styled.input`
  &::-webkit-input-placeholder {
    text-align: center;
    color: lightgray;
    font-size: 16px;
  }

  &:-moz-placeholder { /* Firefox 18- */
    text-align: center;
    color: lightgray;
    font-size: 16px;
  }

  &::-moz-placeholder {  /* Firefox 19+ */
    text-align: center;
    color: lightgray;
    font-size: 16px;
  }

  &:-ms-input-placeholder {  
    text-align: center;
    color: lightgray;
    font-size: 16px;
  }

  &:focus::-webkit-input-placeholder { color:transparent; }
  &:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
  &:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
  &:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */
`;


const SearchBar = props => {
  return (
    <SearchBarInput
      type="search"
      id="SearchBar"
      placeholder="Search"
      results="0"
      onChange={(e) => props.setSearchResults(e)}
    />
  )
}

SearchBar.propTypes = {
  setSearchResults: PropTypes.func
}

export default SearchBar;