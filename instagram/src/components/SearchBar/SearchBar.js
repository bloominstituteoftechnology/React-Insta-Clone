import React from 'react';
import styled from 'styled-components';

const SearchBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  margin: 0 15px;
`;

const CompanyLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
`;

const SearchBarInput = styled.input`
  width: 30%;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 4px;
`

const IconNav = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
`
 
const Header = styled.header`
  width: 100%;
`

const SearchBar = props => {
  return (
    <Header>
      <SearchBarDiv>
        <CompanyLogo>
          <span><i className="fab fa-instagram"></i></span>
          <h2>Instagram</h2>
        </CompanyLogo>
        <SearchBarInput 
          type="text" 
          placeholder="Search" 
          onChange={props.handleOnSearch}
        />
        <IconNav>
          <span><i className="far fa-compass"></i></span>
          <span><i className="far fa-heart"></i></span>
          <span><i className="far fa-user"></i></span>
        </IconNav>
      </SearchBarDiv>
    </Header>
  )
}

export default SearchBar;