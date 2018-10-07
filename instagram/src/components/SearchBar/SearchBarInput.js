import React from 'react';

import PropTypes from 'prop-types';

const SearchBarInput = ({ onChange }) => {
  return (
    <div className="search-bar-input">
      <i className="fas fa-search" />
      <input
        type="search"
        name="search"
        placeholder="Search"
        onChange={onChange} />
    </div>
  );
}

SearchBarInput.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchBarInput;
