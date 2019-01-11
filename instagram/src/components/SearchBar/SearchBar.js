import React from 'react';
import './SearchBar.css';
import logo from './img/instagram-new-logo.png';
import logoCam from './img/icons8-instagram-50.png';
import logoUser from './img/icons8-user-64.png';
import logoHeart from './img/icons8-heart-50.png';
import logoCompass from './img/icons8-compass-filled-50.png';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 64px;
  background: #f8f9fa;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`
const HeaderLogo = styled.div`
  width: 33%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 25px;
`
const HeaderSearch = styled.div`
  width: 33%;
`
const HeaderIcons = styled.div`
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 25px;
`
const Icons = styled.img`
  padding-left: 20px;
`
const HeaderInput = styled.input`
  max-width: 90%;
  width: 100%;
  border-radius: 3px;
`

const SearchBar = props => {
  return (
    <Header>
      <HeaderLogo>
        <img src={logoCam} height='32px'/>
        <img src={logo} height='48px'/>
      </HeaderLogo>
      <HeaderSearch>
        <HeaderInput type='text' placeholder='Search' onChange={props.search}/>
      </HeaderSearch>
      <HeaderIcons>
        <Icons src={logoCompass} height='32px'/>
        <Icons src={logoHeart} height='32px'/>
        <Icons src={logoUser} onClick={props.logout} height='32px'/>
      </HeaderIcons>
    </Header>
  );
};

export default SearchBar;
