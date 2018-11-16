import React from 'react';
import './SearchBar.css';
import * as Icon from 'react-feather';
import styled from "styled-components";
//styled comps
const Header = styled.div`
    padding: 5px 0; 
    border-bottom: 1px solid #6b6b83;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#f2eaeb;
`
const Logos = styled.div`
    display: flex;
    align-items: center;
    .home-button{
        margin: 0 10px;
    }
    span{
        margin-right: 10px;
        margin-top: -5px;
        font-size: 25px;
        font-weight: 100;
    }
    .logo{
        text-decoration: none;
        font-family: 'Grand Hotel', cursive;
        font-size: 25px;
    }
`
const Search = styled.form`
input{
    padding: 5px;
    border: 1px solid #6b6b83; 
    color: #f2eaeb;
    border-radius: 2px;
    background: #02267b75;
    text-align: center;
    :focus{
        outline: none;
    }
}
`
const NavButtons = styled.div`
    display: flex;
    .menu-button{
        margin: 0 5px;
    }
    :last-child{
        margin: 0 10px 0 5px;
    }
`
function SearchBar(props){
    return(
        <Header>
            <Logos>
                <Icon.Instagram className='home-button'/>
                <span>|</span>
                <a className='logo' href='#'>Instagram</a>
            </Logos>
            <Search>
                <input>
                </input>
            </Search>
            <NavButtons>
                <Icon.Compass className='menu-button'/>
                <Icon.Heart className='menu-button'/>
                <Icon.UserMinus onClick={props.logout} className='menu-button'/>
            </NavButtons>
        </Header>
    );
}

export default SearchBar;