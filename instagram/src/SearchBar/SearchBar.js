import React, { Component } from "react";
import styled from "styled-components";
const SearchBarDiv = styled.div`
  width: 20%;
  position: relative;
`;
const SearchBarInput = styled.input`
  padding: 7px;
  text-align: center;
  border-radius: 4px;
  border: black solid 1px;
  width: 100%;
  color: black;
`;
const SearchBarIcon = styled.img`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 10%;
  height: auto;
`;
const SearchBar = prop => {
  return (
    <SearchBarDiv>
      <SearchBarInput type="text" placeholder=" search for something" />
      <SearchBarIcon
        className="search-icon"
        src="https://image.ibb.co/hPAfJp/search.png"
        alt="search"
      />
    </SearchBarDiv>
  );
};
export default SearchBar;
