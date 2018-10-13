import React, { Component } from "react";
import "./SearchBar.css";
import styled from "styled-components";
import img from "./search-img.png";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 20px;
  margin-bottom: 60px;
`;

const LogoName = styled.div`
  font-family: "Grand Hotel", cursive;
  font-size: 24px;
  padding-left: 10px;
`;
const Logo = styled.div`
  display: flex;
`;
const LogoImg = styled.div`
  border-right: 1px solid black;
  padding-left: 0px;
  height: 28px;
`;
const InstaLogo = styled.i`
  font-size: 28px;
`;

const Search = styled.input`
  padding-right: 25px;
  padding-left: 30px;
  text-align: center;
  border: 1px solid #f5f5f5;
  font-size: 13px;
  color: silver;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position-x: 30%;
  background-position-y: center;
`;
const Icon = styled.i`
  font-size: 24px;
  padding-right: 8px;
  padding-left: 8px;
`;
class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  onFocus = event => {
    event.target.value = "";
    event.target.classList.add("no-background");
  };
  onBlur = event => {
    event.target.value = "Search";
    event.target.classList.remove("no-background");
  };

  render() {
    return (
      <SearchBarContainer>
        <Logo>
          <LogoImg>
            <InstaLogo className="fab fa-instagram" />
          </LogoImg>
          <LogoName>Instagram</LogoName>
        </Logo>
        <Search
          type="search"
          defaultValue="Search"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.props.searchInputHandler}
          onKeyDown={this.props.searchHandler}
        />
        <div>
          <Icon className="far fa-compass" />
          <Icon className="far fa-heart" />
          <Icon className="far fa-user" />
          <Icon
            className="fas fa-sign-out-alt"
            onClick={this.props.logoutHandler}
          />
        </div>
      </SearchBarContainer>
    );
  }
}

export default SearchBar;
