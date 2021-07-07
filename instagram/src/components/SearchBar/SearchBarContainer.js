import React from "react";
import iglogo from "./iglogo.png";
import camLogo from "./camera-logo.jpg";
//import "./SearchBar.css";
import styled from "styled-components";
//import { Input, Container, Row, Col } from "reactstrap";

const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const LogoHeader = styled.div`
  width: 300px;
  line-height: 75px;
`;

const LogoImage = styled.img`
  height: 50%;
  padding: 0px 15px;
`;

const Divider = styled.span`
  width: 100px;
`;

const InputWrapper = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  width: 300px;
`;
const SearchIcon = styled.i`
  position: absolute;
  display: inline;
  top: 33px;
  padding-left: 10px;
`;
const SocialDiv = styled.div`
  width: 50px;
`;
const SearchBar = props => {
  /* return <div className="search-bar-wrapper">
       <Container>
          <Row>
            <Col lg="1">
              <img style={{ width: "100%" }} className="camLogo" src={camLogo} alt="camera-logo" />
            </Col>
            <Col lg="2">
              <img style={{ width: "100%" }} className="iglogo" src={iglogo} alt="instagram-logo" />
            </Col>
            <Col lg="4">
              <Input style={{ width: 200, textAlign:"center"}} type="text" placeholder="Search" />
            </Col>
        </Row>

      </Container>
     */

  return (
    <Header>
      <LogoHeader>
        <LogoImage src={camLogo} alt="camera-logo" />
<Divider> | </Divider>
        <LogoImage src={iglogo} alt="instagram-logo" />
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

/* 
      <form on Submit={props.search} onChange={props.handleChange}>
        <input
          style={{ textAlign: "center", width: "150px", height:"40px"}}
          type="text"
          placeholder="Search"
        />
      </form>

      <div className="social wrapper">
        <div className="social">
          <i className="far fa-heart" />
        
        
          <i className="far fa-user-circle" />
        
       
          <i className="far fa-compass" />
        </div>
      </div>
    </div>
  );
};*/

export default SearchBar;
