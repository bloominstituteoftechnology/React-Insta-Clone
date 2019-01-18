import React from 'react';
import styled from 'styled-components';


import InstagramLogo from '../../Images/instagram-logo.jpeg';
import InstagramScript from '../../Images/instagram-script.png';
import NavigationIcon from '../../Images/navigation-icon.png';
import UserIcon from '../../Images/user-icon.jpeg';
import HeartIcon from '../../Images/heart-icon.png';
import MagnifyingGlass from '../../Images/magnifying-glass.png';


const Container = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const LogoDiv = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  line-height: 75px;
`;

const LogoImg = styled.img`
  height: 40%;
  margin-top: 25px;
  padding: 0px 15px;
`;

const Search = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 100%;
  border-radius: 3px;
  text-indent: 28px;
  
`;

const MagImg = styled.img`
position: relative;
  top: 8px;
  left: -91%;
        height: 20px;
`;

const RightIcons = styled.div`
  display: flex;
  width: 30%;
`;

const Icons = styled.div`
  width: 10%;
`;



export const SearchBar = (props) =>
    <Container>
        <LogoDiv>
            <LogoImg alt="instagram logo" src={InstagramLogo} />
            |

          <LogoImg alt="instagram script" src={InstagramScript} />
        </LogoDiv>
        <Search>
            <SearchInput type="text" placeholder="Search" onKeyDown={props.searchHandler} />
            <MagImg alt="Magnifying Glass" src={MagnifyingGlass} />
        </Search>
        <RightIcons>
            <Icons>
                <LogoImg alt="Navigation Icon" src={NavigationIcon} />
            </Icons>
            <Icons>
                <LogoImg alt="Heart Icon" src={HeartIcon} />
            </Icons>
            <Icons>
                <LogoImg alt="User Icon" src={UserIcon} />
            </Icons>
        </RightIcons>
    </Container>