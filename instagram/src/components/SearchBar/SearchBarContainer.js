import React from 'react';
import Logo from '../IG-assets/iglogo.png';
import Camera from '../IG-assets/IGLogo.svg'
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  z-index: 2;
  border-bottom: 1px solid #3333;
  width: 100%;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  margin-top: -110px;
`;

const LogoHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-top: 15px;
`;

const LogoImage = styled.img`
  height: 80%;
  padding-left: 15px;
  `;

const DivideLine = styled.h2`
  height: 100%;
  margin-left: 15px;
  padding-top: 13px;
  `;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  margin-top: 25px;
  `;

const IconWrapper = styled.div`
  display: flex;
  margin-right: 35px;
  `;

const Social = styled.div`
  width: 50px;
  height: 50px;
  `;
  


const SearchBarContainer = (props) => {
    return (
        <Header>
          <LogoHeader>
            <LogoImage alt="instagram logo" src={Camera} className="logo-image" />
            <DivideLine>|</DivideLine>
            <LogoImage alt="instagram logo" src={Logo} className="logo-image" />
          </LogoHeader>
          <div>
            <SearchInput type="text" placeholder="Search" onKeyDown={props.searchPost} className="search-input"/>
          </div>
          <IconWrapper>
            <Social>
              <i className="fa fa-compass" />
            </Social>
            <Social>
              <i className="fa fa-heart" />
            </Social>
            <Social>
              <i className="fa fa-user-circle" />
            </Social>
          </IconWrapper>
        </Header>
      );
    };
    
    export default SearchBarContainer;