import React from 'react';
import styled from 'styled-components';

const SearchForm = (props) => {
  return (
    <form onSubmit={props.search} onChange={props.handleChange}>
      <Search type="text" placeholder="&#xf002; Search" name="searchInput" />
    </form>
  );
};

export default SearchForm;

const Search = styled.input`
  text-align: center;
  font-family: FontAwesome, 'Open Sans', Verdana, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  padding: 5px;
  width: 200px;
  background: whitesmoke;
  margin-top: 10px;
`;
