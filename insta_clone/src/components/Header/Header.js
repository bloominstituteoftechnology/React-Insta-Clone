import React from 'react';
import './header.css';
import Logo from '../../img/image.png';
import Profile from '../../img/icons.png';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  return (
    <Header>
      <ImgLogo src={Logo} alt="" />
      <SearchBar />
      <ImgLogo src={Profile} alt="" />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 200px;
`;

const ImgLogo = styled.img`
  width: 200px;
  height: 50px;
`;

export default Header;
