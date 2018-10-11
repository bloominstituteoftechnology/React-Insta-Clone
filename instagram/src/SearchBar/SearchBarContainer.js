import React, { Component } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import "./SearchBar.css";
import styled from "styled-components";
const SearchBarHeader = styled.header`
  margin: 10px 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SearchBarContainer = props => {
  return (
    <SearchBarHeader>
      <Logo />
      <SearchBar />
      <Navigation />
    </SearchBarHeader>
  );
};
export default SearchBarContainer;
