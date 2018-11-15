import React, { Component } from 'react';
// import './SearchBar.css';
import logo from '../../images/Instagram-logo.png';
import logoWord from '../../images/instagram_Word.png';
import profileImg from '../../images/profile.png';
import styled from 'styled-components'

const Header = styled.div`
    width: 80%;
    margin: 0 auto;
    background: white;
    border-bottom: 1px solid lightgray;
    padding: 10px;
    display: flex;
    flex-wrap: nowrap;
    justify-content:  space-around;
    align-items: center;
`;

const HeadBox = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
`;

const HeadInput = styled.input`
    text-align: center;
    width: 250px;
    padding: 5px;
    border-radius: 8px;
    border: 1px solid gray;
`;

const HeaderImg = styled.img`
    width: 45%;
    height: 10%;
    margin: 10px;
`;

const ProfileImg = styled(HeaderImg)`
    width: 10%;
    height: 5%;
    cursor: pointer;
`;

const LogoImg = styled(HeaderImg)`
    width: 15%;
    height: 5%;
    margin-right: 0;
    padding-right: 15px;
    border-right: 3px solid black;
`;

const MenuBox = styled(HeadBox)`
    justify-content: space-evenly;
    width: 260px;
`;


const SearchBar = props => {

    return(
        <Header className='searchBar'>
            <HeadBox className='head-box logos'>
            <LogoImg src={logo} className='logo'/>
            
            <HeaderImg src={logoWord}/>
            
            </HeadBox>
            <HeadBox className='head-box search'>
            <form ><HeadInput onChange={props.searchFilter} placeholder="Search"/></form>
            
            </HeadBox>
            <MenuBox className='head-box menu'>
            <h1>☯</h1>
            <h1>♡</h1>
            <ProfileImg src={profileImg}  onClick={props.logout}/>
            
            </MenuBox>
            
        </Header>
    );
}

export default SearchBar;