import React from "react";
import IGLogo from "../../assets/iglogo.png";
import "./SearchBar.css";
import styled, { css } from "styled-components";

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
const LogoImage = styled.div`
  height: 100%;
`;
const SocialWrapper = styled.div`
  display: flex;
`;

const SearchBar = props => {
  return (
    <Header>
      <ImageWrapper>
        <LogoImage>
          <img alt="instagram logo" src={IGLogo} className="logo-image" />
        </LogoImage>
      </ImageWrapper>
      <div>
        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={props.handleInput}
        />
      </div>
      <SocialWrapper>
          <div className="social">
            <i className="fa fa-compass" />
          </div>
          <div className="social">
            <i className="fa fa-heart" />
          </div>
          <div className="social">
            <i className="fa fa-user-circle" />
          </div>
      </SocialWrapper>
    </Header>
  );
};

export default SearchBar;