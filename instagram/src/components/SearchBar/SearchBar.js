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
import HeaderLogo from "../StyledComponents";

const SearchInput = styled.input`
  width: 30%;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  font-size: 1.8rem;

  @media (max-width: 600px) {
    order: 2;
    width: 98%;
    margin-top: 5px;
  }
`;

const MainHeaderLogo = styled(HeaderLogo)`
  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  @media (max-width: 600px) {
    width: 50%;
  }
`;

const IconMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 25%;
`;

const SearchBar = props => {
  return (
    <Header className="search-bar-container">
      <LogoContainer className="logo-container">
        <FiInstagram className="icon logo" />
        <MainHeaderLogo id="header-logo">SlightDelayGram</MainHeaderLogo>
      </LogoContainer>
      <SearchInput
        id="search-input"
        type="text"
        placeholder="Search"
        onChange={props.changeHandler}
        value={props.searchState}
      />
      <IconMenu className="header-icon-container">
        <FiCompass className="icon" />
        <FiHeart className="icon" />
        <FiUser className="icon" />
        <FiLogOut className="icon" onClick={props.logout} />
      </IconMenu>
    </Header>
  );
};
export default SearchBar;
