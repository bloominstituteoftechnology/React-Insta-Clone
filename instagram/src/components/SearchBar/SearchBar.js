import React from "react";
import IconLinks from "./IconLinks";
import SearchField from "./SearchField";
import Branding from "./Branding";
import "./SearchBar.css";
import styled from "styled-components";

const SearchbarContainer = styled.header`
  width: 100%;
  padding: 2% 0;
  margin-bottom: 5%;
  align-items: center;
  border-bottom: 1px solid #ececec;
`;

const SearchBar = props => {
  return (
    <SearchbarContainer>
      <Branding />
      <IconLinks logout={props.onClick} />
      <SearchField search={props.search} onChange={props.onChange} />
    </SearchbarContainer>
  );
};

export default SearchBar;
