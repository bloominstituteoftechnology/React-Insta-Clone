import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';
import styled, {css} from 'styled-components';

const SearchBarWrapper = styled.header`
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

const SocialWrapper = styled.div`
  display: flex;
`;

const SearchBar = props => {
  return (
    <SearchBarWrapper>
      <ImageWrapper>
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </ImageWrapper>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <SocialWrapper>
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </SocialWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
