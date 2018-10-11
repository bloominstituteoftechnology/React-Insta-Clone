import React from 'react';
import styled from 'styled-components';
import Container from '../../Styles/Container';
import { Input } from '../../Styles/Input';

const Header = styled.header`
  height: 77px;
  padding: 1.5rem;
  font-size: 2.5rem;
  color: #262626;
  border-bottom: 1px solid #dbdbdb;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const LogoHeader = styled.h1`
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  margin-right: 1.8rem;
  display: flex;
  align-items: center;
  font-size: 3.1rem;
`;

const Brand = styled.span`
  border-left: 1px solid #262626;
  padding-left: 1.8rem;
  display: flex;
  align-items: center;
`;

const BrandImg = styled.img`
  width: 105px;
  height: 39px;
`;

const InputContainer = styled.form`
  position: relative;
`;

const SearchIcon = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  font-size: 1.4rem;
  transform: translateY(-25%);
  color: #262626;
`;

const SearchBarIcons = styled.div`
  i {
    margin-left: 3rem;
  }
`;

const SearchBar = ({ filterUsers, updateValue }) => {
  return (
    <Header>
      <Container>
        <LogoHeader>
          <Logo>
            <i className="fab fa-instagram" />
          </Logo>
          <Brand>
            <BrandImg src="logo.png" alt="Instagram" />
          </Brand>
        </LogoHeader>
        <InputContainer onSubmit={e => filterUsers(e)}>
          <Input
            search
            type="text"
            placeholder="Search"
            className="SearchBar-Input"
            id="search"
            onChange={updateValue}
          />
          <SearchIcon htmlFor="search">
            <i className="fas fa-search" />
          </SearchIcon>
        </InputContainer>

        <SearchBarIcons>
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </SearchBarIcons>
      </Container>
    </Header>
  );
};

export default SearchBar;
