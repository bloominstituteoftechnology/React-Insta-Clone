import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 1.5%;
`;

const LeftNav = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
  i {
      padding-bottom: 10px;
  }
`;
const LogoText = styled.h1`
  font-family: "Lobster Two", "CRoboto";
  font-size: 28px;
  border-left: 2px solid #c2c2c2;
  margin-left: 20px;
  padding-left: 20px;
`;

const SearchInput = styled.input`
 text-align: center;
`

const RightNav = styled.div`
  display: flex;
  font-size: 32px;
  
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <LeftNav>
        <i className="fab fa-instagram" />
        <LogoText>Instagram</LogoText>
      </LeftNav>
      <SearchInput  className="fa fa-input" placeholder="&#xf002; Search" />
      <RightNav>
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </RightNav>
    </SearchContainer>
  );
};

export default SearchBar;
