import React from 'react';
import './SearchBar.css'
import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid lightgray;
    margin-bottom: 30px;
    padding: 10px 0;
`
const Title = styled.span`
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
    padding-left: 10px;
    border-left: 1px solid lightgray;
`
const SearchBox =  styled.form`
    border: 1px solid lightgray;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`
const IconContainer = styled.div`
    width: 140px;
    display: flex;
    justify-content: space-between;
`

const SearchBar = props =>{
    return(
        <Header>
            <div className = "sb-title">
                <i className = "fas fa-camera-retro fa-2x"></i>
                <Title>Instagram</Title>
            </div>
            
            <SearchBox onSubmit = {props.handleSearch}>
                <i className = "fas fa-search"></i>
                <input className="search" type = "search" placeholder = "Search" onChange = {props.handleUpdateSearch} value = {props.value}></input>
            </SearchBox>       
            <IconContainer>
                <i className = "far fa-compass fa-2x"></i>
                <i className = "far fa-heart fa-2x"></i>
                <i className = "far fa-user fa-2x"></i>
            </IconContainer>                             
        </Header>
    )
}

export default SearchBar;