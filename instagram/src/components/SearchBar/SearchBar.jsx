import React from "react";
import { InputGroup } from "reactstrap";
import styled from "styled-components";

const SearchBarComponent = styled.input`
  height: 50px;
  width: 220px;
  border: 1px solid #ccc;
  border-radius: 7px;
  padding: 2px 15px;
  margin: 0 10px;

  ::placeholder {
    text-align: center;
    font-size: 14px;
    color: #ccc;
  }
`;
const SearchBar = props => {
  return (
    <div className="search-bar">
      <InputGroup>
        <SearchBarComponent
          placeholder="Search"
          type="text"
          onChange={props.searchHandler}
        />
      </InputGroup>
    </div>
  );
};

export default SearchBar;
