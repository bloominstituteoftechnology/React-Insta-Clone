import React from "react";
import textLogo from "../../assets/insta-text-logo.svg"
import cam from "../../assets/camera.svg"
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
    display:flex;
    align-items: center;
`;


const InputGroup = styled.div`
    flex: 0 1 auto;
    min-width: 125px;
    max-width: 215px;
    @media (max-width: 480px) {
    display: none;
    }
`;

const LogoImage = styled.img`
    height: 90%;
`;

const HeaderIcon = styled.span`
    font-size: 20px;
    padding: 0 10px;
    cursor: pointer;
`;


// input field should be refactored eventually into its own component

const SearchBar = props => {

  return (
    <Header>
      <Container>
        <SearchBarWrapper>
          <ImageGroup>
            <LogoImage
              alt="instagram logo"
              src={textLogo}
            />
          </ImageGroup>
          <InputGroup>
            <SearchInput type="text" placeholder="Search" onKeyDown={props.searchPosts} />
          </InputGroup>
          <div>
             <HeaderIcon><i className="far fa-compass icon"></i></HeaderIcon>
             <HeaderIcon><i className="far fa-heart"></i></HeaderIcon>
             <HeaderIcon onClick={props.logout}><i className="far fa-user-circle"></i></HeaderIcon>
          </div>
        </SearchBarWrapper>
      </Container>
    </Header>
  );
};

export default SearchBar;
