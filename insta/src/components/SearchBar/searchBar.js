import React from 'react';
import './search.css';
import styled from 'styled-components';

const StyledImg = styled.img`
    width:200px;
    margin-left: 20px;
    padding:10px;
    margin-top: 15px;
    height:80%;
    width:60%
    @media (max-width: 550px){
        display: none;
    }
`
const BarDiv = styled.div`
    width:1px;
    border: 1px solid light grey;
    margin-left:20px;
    >h1{
        font-size:3rem;
        font-weight: lighter;
        color: lightgrey;
    }
    @media (max-width: 550px){
        display:none
    }
`
const SearchContainer = styled.div`
    .icon{
       color:black; 
    }
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width:100%;
    background: white;
    z-index: 1;
    border-bottom: 2px solid darkgray;
    margin-top:-10px;
    left: 50%;
    transform: translate(-50%, 0);
    @media (max-wdth:550px){
        justify-content:space-between;
    }
`
const ImgRight = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 25%;
`
const ImgLeft = styled.div `
    height: 100px;
    width: 33%;
    display: flex;
    justify-content: flex-start;
    align-items: center; 
    @media (max-width: 550px){
        justify-content: space-evenly;
    }
`
const CenterContent = styled.div `
    width:30%;
    @media (max-width:550px){
        margin-right: 24px;
    }
    >input{
        text-align: center;
    width:100%;
    height:30px;
    border-radius:5px;
    border-style: none;
    border:1px solid black;
    }
`



const SearchBar = props => {
    return (
        <SearchContainer >
            <ImgLeft  >
                <i className="fab fa-instagram fa-4x icon"></i>
                <BarDiv>
                <h1>|</h1>
                </BarDiv>
                <StyledImg src="https://3rockmarketing.com/wp-content/uploads/2016/09/instagram-logo.png"  alt="insta Logo" />
            </ImgLeft>
            <CenterContent className="center-content" >
                <input type='text' placeholder=" &#x1F50D;search" className="search-bar-input" onChange={props.change} value={props.value} />
            </CenterContent>
            <ImgRight className="imgs-right" >
                <a href='#'> <i className="far fa-compass fa-2x icon"></i> </a>
                <a href="#" > <i className="far fa-heart fa-2x icon"></i> </a>
                <a href='#'> <i className="far fa-user fa-2x icon"></i> </a>
            </ImgRight>
        </SearchContainer>
    )
}


export default SearchBar;