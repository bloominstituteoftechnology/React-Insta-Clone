import React from 'react';
import IGLogo from '../../assets/iglogo.png';
//import './SearchBar.css';
import styled, {css} from 'styled-components';

const Header = styled.header`
border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const LogoHeader = styled.div`
  height: 50px;
`;

const LogoImage = styled.img`
  height: 100%;
`;

const SocialWrapper = styled.div`
  display: flex;
`;

const SocialIcons = styled.div`
  width: 50px;
`;

const SearchBar = props => {
  return (
    <Header>
      <LogoHeader>
        <LogoImage src={IGLogo} />
        {/* <img alt="instagram logo" src={IGLogo} className="logo-image" /> */}
      </LogoHeader>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <SocialWrapper>
        <SocialIcons>
          <i className="far fa-compass" />
        </SocialIcons>
        <SocialIcons>
          <i className="far fa-heart" />
        </SocialIcons>
        <SocialIcons>
          <i className="far fa-user-circle" />
        </SocialIcons>
      </SocialWrapper>
    </Header>
  );
};

export default SearchBar;
