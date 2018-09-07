import React from 'react';
import './SearchBar.css';
import logo from './instagram-logo.png';
// import SearchInput from './SearchInput';
import ThreeIcons from './ThreeIcons';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid lightgray;
  `

const Image = styled.img`
  width: 223px;
  `  

const SearchBar = props => {
  return ( 
      <Wrapper>

       {/* <Logo /> */}
         <div>
           <Image src={logo} className="App-logo" alt="instagram-logo" />
         </div>

         <div>
          <form onSubmit={props.search} onChange={props.handleChange}>
            <input name="search" type="text" placeholder="           &#x1f50d;Search"></input>
          </form>
         </div>
       {/* <SearchInput onSubmit={props.search} onChange={props.handleChange}/> */}
       <ThreeIcons />

      </Wrapper>
    );
}
 
export default SearchBar;
