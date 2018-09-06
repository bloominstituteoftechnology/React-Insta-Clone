import React from 'react';
import './SearchBar.css';
import IGLogo from '../../assets/iglogo.png';
import SearchForm from './SearchForm';
import styled from 'styled-components';

function SearchBar(props) {
  return (
    <Header className="search-bar">
      <LogoHeader>
        <i className="fab fa-instagram" />
        <LogoImage src={IGLogo} alt="logo" />
      </LogoHeader>
      <SearchForm search={props.search} handleChange={props.handleChange} />
      <SocialIcons>
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </SocialIcons>
    </Header>
  );
}

export default SearchBar;

const Header = styled.div`
  display: flex;
  width: 640px;
  align-items: center;
  justify-content: space-between;
`;

const LogoHeader = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-image {
    width: 60%;
    margin-top: 10px;
  }

  i {
    font-size: 2rem;
    border-right: 1px solid darkgray;
    padding-right: 20px;
  }
`;

const LogoImage = styled.img`
  width: 60%;
  margin-top: 10px;
`;

const SocialIcons = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    font-size: 1.5rem;
    color: darkgray;
  }
`;
