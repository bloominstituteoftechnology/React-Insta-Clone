import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  border: .5px solid lightgray;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  top: 0px;
`;

const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin: 15px;
`;
const WordIcon = styled.img`
  height: 20px;
  margin: 10px;
  padding-left: 15px;
  border-left: 1px solid gray;
  &:hover{
    cursor: pointer;
  }
`;

const Form = styled.form`
  margin-right: 15px;
  padding: 0;
`;

const Search = styled.input`
  border: .5px solid gray;
  background-color: snow;
  width: 100%;
  height: 25px;
  margin: 10px;
  text-align: center;
`;

const SearchBar = props => {

  return (
    <Header>

      <Icon src={require("./instagram-logo.png")} alt="insta-logo"></Icon>
      <WordIcon src={require("./instagram-word-only.png")} alt="insta-logo-word"></WordIcon>

      <Form onSubmit={props.searchHandler}>
        <Search onChange={props.valueHandler} value={props.searchValue} placeholder=" &#x1F50D; Search"></Search>
      </Form>

      <Icon src={require("./compass.svg")} alt="compass-icon"></Icon>
      <Icon src={require("./heart.png")} alt="heart-icon"></Icon>
      <Icon src={require("./profile-line-icon-by-vexels.png")} alt="profile-icon"></Icon>
    </Header>
  )
}

export default SearchBar;
