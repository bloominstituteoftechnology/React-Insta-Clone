import React, { Component } from "react";
import "./SearchBar.css";
import styled, { css } from "styled-components";

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexStart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled.i`
  width: 50px;
  height: auto;
`;

const SearchField = styled.input`
  .search-bar {
    width: 100%;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background: rgb(243, 243, 243);
    color: gray;
    text-align: left;
    font-size: 1.5rem;
    font-weight: lighter;
  }
`;

const SearchBar = props => {
  return (
    <SpaceBetween className="nav-bar">
      <FlexStart>
        <NavIcon className="fa fa-instagram fa-3x" />
        <img
          src="https://itsdcdn.com/resources/services/logowide/170/instagram.png"
          className="instagram-title"
          alt="Instagram Logo"
        />
      </FlexStart>

      <form className="search-container">
        <SearchField
          type="text"
          placeholder="Search"
          className="search-bar"
          value={props.searchText}
          onChange={props.filterSearch}
        />
      </form>

      <FlexStart>
        <NavIcon className="fa fa-compass fa-3x" />
        <NavIcon className="fa fa-heart-o fa-3x" />
        <NavIcon className="fa fa-user-o fa-3x" />
      </FlexStart>
    </SpaceBetween>
  );
};

export default SearchBar;
