import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './searchBar.css';
import styled from 'styled-components';

const SearchBar = (props) => {
    return (
      <Wrapper>
        <SubWrapper>
          <Image alt="instagram logo" src={IGLogo} />
        </SubWrapper>
        <Input type="text" placeholder="search by username" onKeyUp={props.searchPosts} />
        <Button onClick={props.logout}>log out</Button>
      </Wrapper>
    );
  };
  
  export default SearchBar;

const Wrapper = styled.div`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
`;

const SubWrapper = styled.div`
  height: 50px; 
`;

const Image = styled.img`
  height: 100%; 
`;

const Input = styled.input`
  height: 30px;
  border-radius: 5px; 
`;

const Button = styled.button`
  font-size: 14px; 
  border-radius: 5px; 
  background-color: lightgrey;
  display: flex;
  justify-content: space-around;
  align-items: flex-start; 

  &:hover {
    cursor: pointer;
  }
`;
