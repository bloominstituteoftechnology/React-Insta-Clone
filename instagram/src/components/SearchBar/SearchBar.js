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

const SearchBar = props =>{
    return(
        <Header>
            <div className = "sb-title">
                <i className = "fas fa-camera-retro fa-2x"></i>
                <span className = "title">Instagram</span>
            </div>
            
            <form className = "search-box" onSubmit = {props.handleSearch}>
                <i className = "fas fa-search"></i>
                <input type = "search" placeholder = "Search" onChange = {props.handleUpdateSearch} value = {props.value}></input>
            </form>       
            <div className = "sb-icons">
                <i className = "far fa-compass fa-2x"></i>
                <i className = "far fa-heart fa-2x"></i>
                <i className = "far fa-user fa-2x"></i>
            </div>                             
        </Header>
    )
}

export default SearchBar;