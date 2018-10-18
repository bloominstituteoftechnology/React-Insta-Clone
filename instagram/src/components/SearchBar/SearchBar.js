import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';
import styled from 'styled-components';

const Header = styled.header`
  border-bottom: 1px solid #333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #FFFFFF;
`;

const LogoHeader = styled.div `
  width: 300px;
  line-height: 75px;
`;

const LogoImage = styled.img`
  height: 50%;
  padding: 0px 15px;
`;

const Divider = styled.span`
  width: 50px;
`;

const InputWrap = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
`;

const IconsWrap = styled.div`
  display: flex;
  width: 300px;
`;

const SocialDiv = styled.div`
  width: 50px;
`;

const SearchBar = props => {
    return (
      <Header>
      <LogoHeader>
      <LogoImage alt="instagram logo" src={IGLogo} />
      <Divider>|</Divider>
      </LogoHeader>
      <InputWrap>
      <SearchInput
      type='text'
      placeholder='Search'
      onChange={props.searchPosts}
      />
      </InputWrap>
      <IconsWrap>
        <SocialDiv>
          <i className="far fa-compass" />
        </SocialDiv>
        <SocialDiv>
          <i className="far fa-heart" />
        </SocialDiv>
        <SocialDiv>
          <i className="far fa-user-circle" />
        </SocialDiv>
      </IconsWrap>
    </Header>
  );
};

export default SearchBar;