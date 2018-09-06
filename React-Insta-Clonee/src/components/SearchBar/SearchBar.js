import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const InstaLogo=styled.img`
width: 120px
height: 150px`;
 const InstagramTradeMark=styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
`;
const Header=styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    height: 75px;
    width: 100%;
    position: fixed;
    z-index: 9999;
    top: 0;
    border-bottom: 1px solid #708090;
    background-color: #FFF;
`
const SearchBarInput=styled.div`
    width: 20%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const SearchBarIcons=styled.div`
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    height: 100px;
    align-items: center;
`
const Icon=styled.i`
    font-size: 1.5em;
`

 const SearchBar=props=>{
    return (
        <Header>
        <InstagramTradeMark>
        <Icon className="fab fa-instagram fa-3x"></Icon>
        <InstaLogo src='http://assets.stickpng.com/thumbs/5a4e432a2da5ad73df7efe7a.png' alt='instagram logo'/>  
        </InstagramTradeMark>
        <SearchBarInput>
        <input type='text' placeholder='&#x1F50D; Search' value={props.searchValue} onChange={(e)=>props.handleInputChange(e)}/>
        </SearchBarInput>
        <SearchBarIcons>
            <Icon className="far fa-compass"></Icon>
            <Icon className="far fa-heart"></Icon>
            <Icon className="far fa-user"></Icon>
        </SearchBarIcons>
        </Header>
    )
}
export default SearchBar; 