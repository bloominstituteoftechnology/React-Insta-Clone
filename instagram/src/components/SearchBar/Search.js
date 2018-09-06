import React from 'react';
import styled from "styled-components";

import './Search.css';

// ------------------- STYLED COMPONENTS ---------------
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;  
`;

const SearchHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;  
  position: fixed;
  border-bottom: 1px solid lightgrey;  
  background-color: white;
  height: 60px;  
`;

const SearchButton = styled.input`
  text-align: center;
  padding: 7px 20px;    
`;

const MiddleHeader = styled.div`
  padding-top: 20px;
`;

// ------------------- STYLED COMPONENTS ---------------

function Search(props) {
  return (
    <SearchHeader>

      <div className='left-header'>
        <div className='art-logo'></div>        
      </div>

      <MiddleHeader>
        <SearchButton type='text' className='search-button' placeholder='Search' onChange={props.handleSearchInput}></SearchButton>
      </MiddleHeader>

      <ButtonContainer>
        <div className='compass'></div>
        <div className='heart'></div>
        <div className='profile-nav'></div>
      </ButtonContainer>

    </SearchHeader>
  );
}

export default Search;