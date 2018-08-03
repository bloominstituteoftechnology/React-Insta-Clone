import React from 'react';
import styled from 'styled-components';


const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const LogoHeader = styled.div`
  width: 300px;
  line-height: 75px;
  font-family: 'Grand Hotel', cursive;
  display: flex;
`;



const InputWrapper = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
`;

const Icons = styled.div`
  display: flex;
  width: 300px;
  font-size: 20px;

`;

const SocialDiv = styled.div`
  /* width: 50px; */
  width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row-reverse;
  `;



const SearchBar = props => {
    return ( 
      <Header>
        <LogoHeader>
        <h3>RachelGram</h3>
        <i className="fab fa-instagram"></i>
        </LogoHeader>
        
        <InputWrapper>
        <SearchInput
            type="text" 
            placeholder="Search" 
            onKeyDown={props.searchPosts}
            />
          </InputWrapper>
          <Icons>
            <SocialDiv>
          <i className="far fa-compass" />
          </SocialDiv>
          <SocialDiv>
      <i className="far fa-heart" />
      </SocialDiv>
      <SocialDiv>
<i className="far fa-user-circle" onClick={props.logOut}/>
</SocialDiv>
  </Icons>
</Header>

    );
};
 

export default SearchBar;