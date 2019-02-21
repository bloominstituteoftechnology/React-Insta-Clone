import React from "react";
import "./SearchBar";
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 25%;
  position: relative;
  margin: 0 auto;
`;

const Search = styled.input`
  width: 100%;
  text-align: center;
  font-family: FontAwesome, "Open Sans";
`;

const SearchField = props => {
  return (
    <SearchContainer>
      <Search
        type="text"
        placeholder="&#x1F50D; Search"
        onChange={props.onChange}
      />
    </SearchContainer>
  );
};

export default SearchField;
