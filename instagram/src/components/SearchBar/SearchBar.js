import React from 'react';
import styled from 'styled-components';

const InstaLogo=styled.img`
width: 200px
height: 200px`;

const InstagramTradeMark=styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
`;
const SearchBarActual=styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    height: 200px;
    width: 100%;
`
const SearchBarInput=styled.div`
    width: 20%;
`
const SearchBarIcons=styled.div`
    width: 20%;
    display: flex;
    justify-content: space-evenly;
`
const SearchBar=props=>{
    return (
        <SearchBarActual>
        <InstagramTradeMark>
        <i className="fab fa-instagram fa-3x"></i>
        <InstaLogo src='http://assets.stickpng.com/thumbs/5a4e432a2da5ad73df7efe7a.png' alt='instagram logo'/>  
        </InstagramTradeMark>
        <SearchBarInput>
            <input type='text' placeholder='&#x1F50D; Search' value={props.searchValue} onChange={(e)=>props.handleInputChange(e)}/>
        </SearchBarInput>
        <SearchBarIcons>
            <i className="far fa-compass fa-3x"></i>
            <i className="far fa-heart fa-3x"></i>
            <i className="far fa-user fa-3x"></i>
        </SearchBarIcons>
        </SearchBarActual>
    )
}
export default SearchBar;