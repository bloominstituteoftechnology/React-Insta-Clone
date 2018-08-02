import React from "react";
import "./SearchBar.css";
import cam from "../../assets/instagram-brands.svg";
import textLogo from "../../assets/insta-text-logo.svg";
import styled from "styled-components"

const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  background: #ffffff;
  position: fixed;
  width: 100vw;
  top: 0;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SearchBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    > input {
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    outline: 0;
    padding: 7px 0px 7px 0px;
    z-index: 2;
    text-align: center;
    width: 100%;
    font-size: 14px;
    font-weight:300;
    }
`;

const SearchInput = styled.input`
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    outline: 0;
    padding: 7px 0px 7px 0px;
    z-index: 2;
    text-align: center;
    width: 100%;
    font-size: 14px;
    font-weight:300;
    @media (max-width: 480px) {
    display: none;
    }
`;

const ImageGroup = styled.div`
    height: 40px;
`;


const InputGroup = styled.div`
    flex: 0 1 auto;
    min-width: 125px;
    max-width: 215px;
    @media (max-width: 480px) {
    display: none;
    }
`;




// input field should be refactored eventually into its own component

const SearchBar = props => {
  return (
    <Header>
      <Container>
        <SearchBarWrapper>
          <ImageGroup>
            <img alt="instagram camera" src={cam} className="logo-image" />
            <img
              alt="instagram logo"
              src={textLogo}
              className="logo-image text-logo"
            />
          </ImageGroup>
          <InputGroup>
            <SearchInput type="text" placeholder="Search" onKeyDown={props.searchPosts} />
          </InputGroup>
          <div className="social-group">
             <span className="header-icon"><i className="far fa-compass icon"></i></span>
             <span className="header-icon"><i className="far fa-heart"></i></span>
             <span className="header-icon"><i className="far fa-user-circle"></i></span>
          </div>
        </SearchBarWrapper>
      </Container>
    </Header>
  );
};

export default SearchBar;
