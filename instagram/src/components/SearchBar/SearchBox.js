import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 21.5rem;
  height: 2.8rem;
  border-radius: .3rem;
  border-style: none;
  border: 1px solid lightgray;
  background-color: #fafafa;
  text-align: center;
  font-weight: regular;
  font-size: 1.6rem;
  font-family: "Font Awesome 5 Free", "Roboto", sans-serif;

  &::placehodler {
    color: lightgray;
  }
`;


const SearchBox = props => {
  return (
    <StyledInput 
      type="text"
      className="fa fa-input"
      placeholder=" Search"
      value={props.searchText}
      onChange={(e) => props.handleSearch(e)}
    />
  );
}

SearchBox.propTypes = {
  searchText: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
}

export default SearchBox;