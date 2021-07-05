import React from 'react';
import './SearchBar.css';
import logo from './instagram-logo.png';
// import SearchInput from './SearchInput';
import ThreeIcons from './ThreeIcons';

import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid lightgray;
  `

const LogoImage = styled.img`
  width: 223px;
  `  

const SearchBar = props => {
  return ( 
      <Header>

       {/* <Logo /> */}
         <div>
           <LogoImage src={logo} className="App-logo" alt="instagram-logo" />
         </div>

         <div>
          <form onSubmit={props.search} onChange={props.handleChange}>
            <input name="search" type="text" placeholder="           &#x1f50d;Search"></input>
          </form>
         </div>
       {/* <SearchInput onSubmit={props.search} onChange={props.handleChange}/> */}
       <ThreeIcons />

      </Header>
    );
}
 
export default SearchBar;
