import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const SearchWrap = styled.div`
  height: 155px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Search = styled.input`
height: 30px;
width: 200px;
`;


 const SearchBar = (props) => {
   return (
     <div>
       <SearchWrap>
       <i className="fab fa-instagram fa-5x"></i>
       <img width="256" alt="Instagram logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/256px-Instagram_logo.svg.png"/>
       <form onKeyDown={props.onSearch}>
         <Search type="text" placeholder="Search" name="search"/>
       </form>
       <i className="far fa-compass fa-3x"></i>
       <i className="far fa-heart fa-3x"></i>
       <i className="far fa-user fa-3x"></i>
       </SearchWrap>
     </div>
   );
 }

export default SearchBar;