import React from 'react';
import IGLogo from '../../assets/iglogo.png';
//import './SearchBar.css';
import styled from 'styled-components';

const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const ImageWrapper = styled.div`
  height: 50px;
`;

const LogoImage = styled.img`
  height: 100%;
`;

const SocialWrapper = styled.div`
  display: flex;
`;

const Social = styled.div`
  width: 50px;
`;

const SearchBar = props => {
  return (
    <Header>
      <ImageWrapper>
        <LogoImage alt="instagram logo" src={IGLogo} className="logo-image" />
      </ImageWrapper>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <SocialWrapper className="social-wrapper">
        <Social className="social">
          <i className="far fa-compass" />
        </Social>
        <Social className="social">
          <i className="far fa-heart" />
        </Social>
        <Social className="social">
          <i className="far fa-user-circle" />
        </Social>
      </SocialWrapper>
    </Header>
  );
};

export default SearchBar;
