import React from "react";
// import { Input } from "reactstrap";
import {
  FiInstagram,
  FiCompass,
  FiHeart,
  FiUser,
  FiLogOut
} from "react-icons/fi";
import styled from "styled-components";
import "./SearchBar.css";

const SearchInput = styled.input`
  width: 30%;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 1.8rem;
`;

const HeaderLogo = styled.h1`
  font-family: Cookie, cursive;
  font-size: 3.2rem;
  margin: auto 2%;
  padding-left: 1%;
  border-left: 2px solid black;
`;

const SearchBarDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  margin-top: 10px;
`;

const SearchBar = props => {
  return (
    <SearchBarDiv className="search-bar-container">
      <div className="logo-container">
        <FiInstagram className="icon logo" />
        <HeaderLogo id="header-logo">SlightDelayGram</HeaderLogo>
      </div>
      <SearchInput
        id="search-input"
        type="text"
        placeholder="Search"
        onChange={props.changeHandler}
        value={props.searchState}
      />
      <div className="header-icon-container">
        <FiCompass className="icon" />
        <FiHeart className="icon" />
        <FiUser className="icon" />
        <FiLogOut className="icon" onClick={props.logout} />
      </div>
    </SearchBarDiv>
  );
};
export default SearchBar;
