import React from 'react';
import './search.css';
import { StyledHeader, SearchBarLeft, CompanyName,
          SearchInput, SearchBarRight } from './SearchStyle';

const SearchBar = props => {
  return(
    <StyledHeader>
      <SearchBarLeft>
        <i className="fab fa-instagram icons"></i>
        <CompanyName> | Instagram</CompanyName>
      </SearchBarLeft>
      <SearchInput type="text" placeholder="&#xF002; Search" onChange={props.filter}/>
      <SearchBarRight>
        <i className="far fa-compass icons"></i>
        <i className="far fa-heart icons"></i>
        <i className="far fa-user icons" onClick={props.handleLogout}></i>
      </SearchBarRight>
    </StyledHeader>
  );
};

export default SearchBar;
