import React from "react";
import logo from "./img/instagram-header.png";
import styled from 'styled-components';

function SearchBar(props) {
  return (
    <SearchBarContainer>
        <SearchBarLink href="#">
          <FlexDiv>
            <LogoIcon>
              <i className="fab fa-instagram" />
            </LogoIcon>
            <LogoTextImage src={logo}/>
          </FlexDiv>
        </SearchBarLink>
      <div className="search-input">
        <form onSubmit={props.handleSearch}>
          <SearchBarInput id="search-input" type="text" placeholder="Search" value={props.searchInput} onChange={props.handleSearchInputChange}/>
        </form>
      </div>
      <FlexDiv>
          <SearchBarLinkRight href="#">
            <i className="far fa-compass" />
          </SearchBarLinkRight>
          <SearchBarLinkRight href="#">
            <i className="far fa-heart" />
          </SearchBarLinkRight>
          <SearchBarLinkRight href="#">
            <i className="far fa-user" />
          </SearchBarLinkRight>
      </FlexDiv>
    </SearchBarContainer>
  );
}

//Styled Components
const SearchBarContainer = styled.div`
  max-width: 920px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LogoTextImage = styled.img`
  width: 100px;
  top: .4rem;
  position: relative;
  align-self: center;
  padding-left: 14px;
`;

const SearchBarLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 3.2rem;
`;

const FlexDiv = styled.div`display:flex`;

const LogoIcon = styled.div`
  padding-right: 20px;
  border-right-width: 1px;
  border-right-style: solid;
  height: auto;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
`;

const SearchBarInput = styled.input`
  border: solid 1px #dbdbdb;
  color: #999;
  background-color: #FAFAFA;
  width: 215px;
  border-radius: 3px;
  padding: 4px 3px;

  &::placeholder {
    color: #999;
    text-align: center;
  }
`;

const SearchBarLinkRight = SearchBarLink.extend`
  font-size: 2.4rem;
  padding-right: 3.2rem;
  color: #545454;

  &:last-child {
    padding-right: 0;
  }
`;

export default SearchBar;
