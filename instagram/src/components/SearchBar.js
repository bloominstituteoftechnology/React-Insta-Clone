import React from 'react';
// import './SearchBar.css';
import instagram from './instagram.png';
import styled, { css } from 'styled-components';

const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const LogoHeader = styled.div`
  width: 300px;
  line-height: 75px;
`;

const LogoImage = styled.img`
  height: 50%;
  padding: 0px 15px;
  @media (max-width: 785px) {
    display: none;
  }
`;

const LogoCameraImage = styled.img`
  height: 50%;
  padding: 0px 15px;
`;

const Divider = styled.span`
  width: 50px;
  @media (max-width: 785px) {
    display: none;
  }
`;

const InputWrapper = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  width: 300px;
`;

const SearchIcon = styled.i`
  position: absolute;
  display: inline;
  top: 33px;
  padding-left: 10px;
`;

const SocialDiv = styled.div`
  width: 50px;
`;

const SearchBar = props => {
  return (
    <Header>
      <LogoHeader>
        <LogoCameraImage alt="instagram camera" />
        <Divider>|</Divider>
        <LogoImage alt="instagram logo" src={instagram} />
      </LogoHeader>
      <InputWrapper>
        <SearchIcon className="fas fa-search" />
        <SearchInput
          type="text"
          placeholder="Search"
          onKeyDown={props.searchPosts}
        />
      </InputWrapper>
      <IconsWrapper>
        <SocialDiv>
          <i className="far fa-compass" />
        </SocialDiv>
        <SocialDiv>
          <i className="far fa-heart" />
        </SocialDiv>
        <SocialDiv>
          <i className="far fa-user-circle" />
        </SocialDiv>
      </IconsWrapper>
    </Header>
  );
};


export default SearchBar;