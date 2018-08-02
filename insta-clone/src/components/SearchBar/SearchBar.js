import React from 'react';
import './SearchBar.css';
import styled, { injectGlobal } from 'styled-components';
import Billabong from '../Billabong.woff';

injectGlobal`
  @font-face {
    font-family: Billabong;
    src: url('${Billabong}');
  }
`;

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  background-color: white;
`;

const SearchLeft = styled.div`
  display: flex;
  align-items: center;

  i {
    font-size: 42px;
    margin-right: 10px;
  }
`;

const Logo = styled.div`
  font-family: 'Billabong';
  font-weight: normal;
  font-size: 36px;
  border-left: 2px solid silver;
  padding-left: 10px;
  padding-top: 10px;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: baseline;
`;

const Search = styled.input`
  font-family: FontAwesome;
  font-size: 16px;
  width: 200px;
  height: 30px;
  margin: 0 5px 0 0;
`;

const SearchButton = styled.button`
  height: 35px;
  width: 40px;
  border: 1px solid lightgrey;
  margin: 0;

  span {
    font-size: 18px;
  }
`;

const SearchRight = styled.div`
  margin-right: 20px;
  font-size: 18px;

  i {
    margin: 0 5px;

  }
`;

const SearchBar = props => {
  return (
    <StyledSearchBar>
      <SearchLeft>
        <i className='fab fa-instagram' />
        <Logo>Instagram</Logo>
      </SearchLeft>
      <SearchInput>
          <Search onChange={props.searchHandler} value={props.searchBar} onKeyPress={e => {if (e.charCode === 13){props.searchSubmit()}}} placeholder="Search" />
          <SearchButton className='submit-btn' onClick={props.searchSubmit}><span role='img' aria-label='search'>&#x1F50D;</span></SearchButton>
      </SearchInput>
      <SearchRight>
        <i className='far fa-compass' />
        <i className='far fa-heart' />
        <i className='far fa-user' />
      </SearchRight>
    </StyledSearchBar>
  )
}

export default SearchBar;
