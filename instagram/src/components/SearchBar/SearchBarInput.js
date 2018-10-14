import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchBarInputContainer = styled.div`
  align-items: center;
  display: flex;

  i {
    font-size: 16px;
  }

  input {
    text-align: center;
  }
`;

const SearchBarInput = ({ onChange }) => {
  return (
    <SearchBarInputContainer>
      <i className="fas fa-search" />
      <input
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
