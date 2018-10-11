import React from 'react';
import styled from 'styled-components';
import instasprite from '../../img/instagram-spritesheet.png';
import realsprite from '../../img/real-spritesheet.png';

// import './SearchBar.css';

const StyledSearchBar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 55px;
  background: #fff;
`

const StyledLeftItems = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const StyledLogo = styled.div`
  background-image: url(${instasprite});
  background-repeat: no-repeat;
  background-position: -78px -168px;
  height: 24px;
  width: 24px;
  margin-left: 20px;
`

const VerticalBar = styled.div`
  height: 35px;
  margin-left: 20px;
  border-right: 1px solid #888;
`

const TextLogo = styled.div`
  background-image: url(${instasprite});
  background-repeat: no-repeat;
  background-position: -58px 0;
  height: 29px;
  width: 103px;
  margin-left: 20px;
`

const StyledSearch = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
`

const StyledSearchInput = styled.input`
  border-radius: 5px;
  border: 1px solid #ddd;
  background: #f8f8f8;
  padding: 10px;
`

const StyledRightItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const ExploreIcon = styled.div`
  background-image: url(${realsprite});
  background-repeat: no-repeat;
  background-position: -458px -112px;
  height: 24px;
  width: 24px;
  margin-right: 20px;
`

const ActivityIcon = styled.div`
  background-image: url(${realsprite});
  background-repeat: no-repeat;
  background-position: -458px -190px;
  height: 24px;
  width: 24px;
  margin-right: 20px;
`

const ProfileIcon = styled.div`
  background-image: url(${realsprite});
  background-repeat: no-repeat;
  background-position: -458px -294px;
  height: 24px;
  width: 24px;
  margin-right: 20px;
`



const SearchBar = props => (
  <StyledSearchBar>
    <StyledLeftItems>
      <StyledLogo />
      <VerticalBar />
      <TextLogo />
    </StyledLeftItems>
    <StyledSearch>
      <StyledSearchInput 
        type='text' 
        className='search-input'
        placeholder='search' 
        onKeyUp={props.searchPosts}
      />
    </StyledSearch>
    <StyledRightItems>
      <ExploreIcon />
      <ActivityIcon />
      <ProfileIcon />
    </StyledRightItems>
  </StyledSearchBar>
);



export default SearchBar;