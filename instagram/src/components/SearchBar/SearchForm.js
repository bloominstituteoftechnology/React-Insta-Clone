import React from 'react';

const SearchForm = (props) => {
  return (
    <form onSubmit={props.search} onChange={props.handleChange}>
      <input type="text" placeholder="&#xf002; Search" name="searchInput" />
    </form>
  );
};

export default SearchForm;
