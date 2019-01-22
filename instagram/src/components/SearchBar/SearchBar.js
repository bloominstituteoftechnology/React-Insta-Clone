import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';
import Input from '../StyledComponents/Reusables/Input';
import Icon from '../StyledComponents/Reusables/Icon';

const Header = styled.div`
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.2);
`

const HeaderBar = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const SearchLogos = styled.div`
  display: flex;
  justify-content: flex-start;
`

const InstaLogo = styled.div`
  width: 100%;
  margin-right: ${props => props.iconLogo ? "20px" : null};
`

const Image = styled.img`
  max-width: ${props => props.textLogo ? "100px" : null};
`

const SearchBarIcons  = styled.div`
  display: flex;
`

const SearchBar = (props) => {
  return (
    <Header>
      <HeaderBar>
        <SearchLogos>
          <InstaLogo iconLogo>
            <i className="fab fa-instagram"></i>
          </InstaLogo>
          <div className="spacer-line"></div>
          <InstaLogo> 
            <Image textLogo src="https://i.imgur.com/wOWyaBc.png" alt="Instagram Text Logo" />
          </InstaLogo>
        </SearchLogos>
        <div className="search-bar-input">
          <form onSubmit={props.onSearch}>
            <Input type="text" placeholder="Search" onChange={props.handleNewSearch} value={props.searched}/>
          </form>
        </div>
        <SearchBarIcons>
          <Icon className="search-history search-icon">
          <i className="far fa-compass"></i>
          </Icon>
          <Icon className="search-likes search-icon">
            <i className="far fa-heart"></i>
          </Icon>
          <Icon className="search-profile search-icon">
            <i className="far fa-user"></i>
          </Icon>
          <Icon className="search-signout search-icon" onClick={props.onSignout}>
            <i className="fas fa-sign-out-alt"></i>
          </Icon>
        </SearchBarIcons>
      </HeaderBar>
    </Header>
  )
}

export default SearchBar;