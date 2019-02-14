import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`

const SearchInputContainer = styled.div`
  background: #FAFAFA;
  border: 1px solid #DBDBDB;
  border-radius: 3px;
  padding: 5px;
  width: 15%;
  color: #9C9C9C;
  display: flex;
  justify-content: space-between;

  &:before {
    content: '\f002';
    border-right: 1px solid grey;
    padding-right: 5px;
  }
  
  &:after {
    content: '\f057';
  }
`

const SearchInput = styled.input`
  background: #FAFAFA;
  border: none;
  color: #9C9C9C;
  text-align: left;
  font-family: arial;
  font-weight: 300;

  &:placeholder-shown {
    text-align: center;
  }

  &:focus::placeholder {
    content: 'search';
    text-align: left;
  } 

  &:focus {
    outline: none;
    text-align: left;
  } 
`

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 10%;
  width: 12%;
`

const InstagramIcon = styled.img`
  width: 50px;
  height: auto;
  padding-right: 21px;
  border-right: 1px solid black;
`

const InstagramLogo = styled.img`
  width: 100px;
  height: auto;
  padding-left: 20px;
`



const SearchBar = (props) => {
  return (
    <SearchBarContainer>
      <div className={'icon-container'}>

        <InstagramIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/2000px-Instagram_simple_icon.svg.png" alt='na'/>

        <InstagramLogo src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='na'/>
      </div>

      <SearchInputContainer className={"fas"}>
        <SearchInput
          type="text" 
          className={"fas fa-search"} 
          placeholder="Search"
          onChange={props.handleOnChange}
          value={props.inputText}
        />
      </SearchInputContainer>

      <NavButtons>
        <span className="far fa-heart"></span> 
        <span className="far fa-compass"></span>
        <span onClick={props.logOut} className="far fa-user"></span>
      </NavButtons>
    </SearchBarContainer>
  );
}

export default SearchBar;