import React from "react";
import IGLogo from "../../assets/iglogo.png";
// import "./SearchBar.css";
import styled from "styled-components";

const SearchBarWrapper = styled.div`
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
    <SearchBarWrapper>
      <ImageWrapper>
        <LogoImage alt="instagram logo" src={IGLogo} />
      </ImageWrapper>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <SocialWrapper>
        <Social>
          <i className="far fa-compass" />
        </Social>
        <Social>
          <i className="far fa-heart" />
        </Social>
        <Social>
          <i className="far fa-user-circle" />
        </Social>
      </SocialWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
