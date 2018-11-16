import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

/***************************************************************************************************
********************************************** Styles **********************************************
***************************************************************************************************/
const InputSearchBar = styled.input`
  width: 30%;
  height: 30px;
  border-radius: 10px;
  padding: 0 10px;
  &:focus {
    outline: none;
  }

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

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
const SearchBar = props => {
  return (
    <InputSearchBar
      type="search"
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