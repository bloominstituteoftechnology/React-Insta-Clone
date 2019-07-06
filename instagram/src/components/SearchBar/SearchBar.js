import React from "react";
import CameraLogo from "../../assets/igcameralogo.png";
import IGLogo from "../../assets/iglogo.png";
import styled from "styled-components";

const Header = styled.header`
  border-bottom: 1px solid grey;
  height: 90px;
  line-height: 100px;
  display: flex;
  justify-content: space-between;
  background: white;
`;

const LogoHeader = styled.div`
  width: 250px;
  line-height: 75px;
`;

const LogoImage = styled.img`
  height: 40%;
  padding: 0px 15px;
  @media (max-width: 763px) {
    display: none;
  }
`;

const Divider = styled.span`
  width: 50px;
`;

const InputWrapper = styled.div`
  width: 250px;
  margin: auto;
  display: flex;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 250px;
  text-align: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  width: 300px;
`;
const SearchIcon = styled.i`
  position: absolute;
  display: inline;
  top: 39px;
  padding-left: 15px;
`;
const SocialDiv = styled.div`
  width: 50px;
`;
const SearchBar = props => {
  return (
    <Header>
      <LogoHeader>
        <LogoImage alt="CameraLogo" src={CameraLogo} />
        <Divider>|</Divider>
        <LogoImage alt="IGLogo" src={IGLogo} />
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
