import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
`;

const LeftNav = styled.div`
  font-size: 40px;
  display: flex;
  align-items: center;
`;
const LogoText = styled.h1`
  font-family: "Lobster Two", "CRoboto";
  font-size: 28px;
  border-left: 2px solid black;
  margin-left: 20px;
  padding-left: 20px;
`;

const SearchInput = styled.input`
 
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
      <SearchInput />
      <RightNav>
        <i class="far fa-compass" />
        <i class="far fa-heart" />
        <i class="far fa-user" />
      </RightNav>
    </SearchContainer>
  );
};

export default SearchBar;
