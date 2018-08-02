import React from "react";
import styled from "styled-components"; 

const TopBar = styled.div`
display: flex; 
justify-content: space-between; 
align-items: center; 
margin: auto; 
height: 150px;
background: white; 
`
const TopBarLeft = styled.div`
display: flex;
align-items: center; 
width: 150px;
`
const InstaImg = styled.img`
width: 55%;
margin-left: 10px; 
`
const Itag = styled.i`
margin: 0 10px; 
cursor: pointer;
`


const SearchBar = props => {
  return (
    <TopBar>
      <TopBarLeft>
        <i className="fas fa-camera" />
        <InstaImg src="https://raw.githubusercontent.com/LambdaSchool/React-Insta-Clone/4079cf6fb6d11bd3ad7a422cdec35e0aab4e2bfe/instagram/src/assets/iglogo.png" alt="logo" />
      </TopBarLeft>
      <form>
        <input
          className="search-bar"
          type="text"
          name="search-bar"
          placeholder="            Search"
          onChange={props.handleNameSearch}
        //   value={props.value}
        />
      </form>
      <div className="top-bar-right">
        <Itag className="far fa-compass" />
        <Itag className="far fa-heart" />
        <Itag className="fas fa-user" />
      </div>
    </TopBar>
  );
};

export default SearchBar;
