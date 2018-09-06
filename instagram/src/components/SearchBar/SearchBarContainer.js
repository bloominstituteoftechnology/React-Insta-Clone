import React from 'react';
// import CameraLogo from '../../assets/igcameralogo.png';
// import IGLogo from '../../assets/iglogo.png';
import styled from 'styled-components';


const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 5rem;
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

const InputContainer = styled.div`
  width: 300px;
  margin: 1rem;
  display: flex;
`;

const SearchInput = styled.input`
  height: 2rem;
  width: 100rem;
  text-align: center;
  border-radius: 5px;
`;

const IconsContainer = styled.div`
  display: flex;
  width: 10rem;
`;

const SearchIcon = styled.i`
  position: absolute;
  display: inline;
  top: 33px;
  padding-left: 10px;
`;
const SocialIcons = styled.div`
  width: 50px;
`;
const SearchBar = props => {
  return (
    <Header>
      <LogoHeader>
        <LogoImage alt="" src={../../assets/igcameralogo.png} />
        <LogoImage alt="" src="../../assets/iglogo.png"/>
      </LogoHeader>
      <InputContainer>
        <SearchIcon className="fas fa-search" />
        <SearchInput
          type="text"
          placeholder="Search"
          onKeyDown={props.searchPosts}
        />
      </InputContainer>
      <IconsContainer>
        <SocialIcons>
          <i className="far fa-compass" />
        </SocialIcons>
        <SocialIcons>
          <i className="far fa-heart" />
        </SocialIcons>
        <SocialIcons>
          <i className="far fa-user-circle" />
        </SocialIcons>
      </IconsContainer>
    </Header>
  );
};

export default SearchBar;