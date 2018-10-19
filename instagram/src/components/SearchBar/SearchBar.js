import React from 'react';
import Camera from '../../assets/igcameralogo.png';
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

const Logo = styled.img`
  height: 50%;
  padding: 0px 15px;
`;

const Divider = styled.span`
  width: 800px;
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
        <Logo alt='instagram camera' src={Camera} />
        <Divider>|</Divider>
      <Logo alt="instagram logo" src={IGLogo} />
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
          <i className="far fa-compass fa-3x" />
        </SocialDiv>
        <SocialDiv>
          <i className="far fa-heart fa-3x" />
        </SocialDiv>
        <SocialDiv>
          <i className="far fa-user-circle fa-3x" />
        </SocialDiv>
      </IconsWrap>
    </Header>
  );
};

export default SearchBar;