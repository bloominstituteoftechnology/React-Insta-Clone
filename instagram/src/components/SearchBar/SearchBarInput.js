import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchBarInputContainer = styled.div`
  align-items: center;
  display: flex;
`;

const SearchIcon = styled.span`
 font-size: 16px;
 `;

const SearchInput = styled.input`
  text-align: center;
`;
  

const SearchBarInput = ({ onChange }) => {
  return (
    <SearchBarInputContainer>
      <SearchIcon>
        <i className="fas fa-search" />
      </SearchIcon>
      <SearchInput
        type="search"
        name="search"
        placeholder="Search"
        onChange={onChange} />
    </SearchBarInputContainer>
  );
}

SearchBarInput.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchBarInput;
