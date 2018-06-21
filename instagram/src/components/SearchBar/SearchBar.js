import React from 'react';
import './searchBar.css';
// import style from "./styles.css";
import styled from 'styled-components';

const SearchDiv = styled.div`
    width: 100%;
    margin: 0 0 20px 0;
    position: fixed;
    top: 0;
    background-color: white;
    padding: 20px 30px;
    z-index: 2;
   
`;
const SearchConainer = styled.div`
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-content: center;
    font-size: 13px;
`;
const SearchChildLeft = styled.div`
    display: flex;
    align-items: center;
`;

const SearchChildCenter = styled.div`
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    font-size: 14px;
    padding: 8px 10px;
    width: 200px;
    background-color: rgb(240, 240, 240);
    border: none;
    border-radius: 5px;
    outline: none;
    &::placeholder{
        color: grey;
        text-align: center;
        letter-spacing: 1px;
        text-transform: capitalize;
    }
    
`;
const SearchLogoA = styled.a`
    border-left: 1px solid grey;
    padding-left: 20px;
    font-size: 33px;
    text-decoration: none;
    color: black;
    font-family: 'Grand Hotel', cursive;
    letter-spacing: 1.3px;
`;

const SearchBar = (props)=>{
    let inputElement;
    return(
        <SearchDiv>
            <SearchConainer>
                <SearchChildLeft>
                    <i className="fab fa-instagram"></i>
                    <SearchLogoA href="#">Instagram</SearchLogoA>
                </SearchChildLeft>
                <div className="center">
                    <form onSubmit={(e) => {e.preventDefault(); props.search(inputElement.value)}}>
                        <SearchInput type="text"
                        id="search__input" 
                        placeholder="search" 
                        ref={(input) => inputElement = input} 
                        />
                    </form>
                </div>
                <div className="right">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="fas fa-user"></i>
                </div>
            </SearchConainer>
        </SearchDiv>
    )
}

export default SearchBar;
