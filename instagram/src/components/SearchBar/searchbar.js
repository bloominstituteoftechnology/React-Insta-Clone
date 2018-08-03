import React from 'react';
import './searchbar.css';
import styled from 'styled-components';

const InstagramLogo = styled.h1`
    font-family: 'Grand Hotel', cursive;
    font-size: 42px;
    color: white;
    text-shadow:
    3px 3px 0 darkslategray,
    -1px -1px 0 darkslategray,  
    1px -1px 0 darkslategray,
    -1px 1px 0 darkslategray,
    1px 1px 0 darkslategray;
}
`

const SearchBarAttrib = styled.div`
    padding: 15px;
    background: white;
    width: 100%;
    position: fixed;
    top: 0;
    border-bottom: 1px solid lightgray;
    background: linear-gradient(to bottom right, lightblue, teal, gray);
`

const InstaIcon = styled.i`
    font-size: 36px;
    margin-right: 10px;
    text-shadow:
    3px 3px 0 darkslategray,
    -1px -1px 0 darkslategray,  
    1px -1px 0 darkslategray,
    -1px 1px 0 darkslategray,
    1px 1px 0 darkslategray;
    color: white;
`

const TopIcons = styled.div`
    font-size: 24px;
    text-shadow:
    3px 3px 0 darkslategray,
    -1px -1px 0 darkslategray,  
    1px -1px 0 darkslategray,
    -1px 1px 0 darkslategray,
    1px 1px 0 darkslategray;
    color: white;
`

const LogoutButton = styled.i`
    cursor: pointer;
    text-shadow:
    3px 3px 0 darkslategray,
    -1px -1px 0 darkslategray,  
    1px -1px 0 darkslategray,
    -1px 1px 0 darkslategray,
    1px 1px 0 darkslategray;
    color: white;
`

const SearchWindow = styled.input`
    border-radius: 5px;
    border: 1 px solid black;
    box-shadow: 3px 3px 5px darkslategray;
    font-family:Grand Hotel;
    font-size: 20px;
    padding-left: 10px;
`

const SearchBar = (props) => {
    return ( 
        <SearchBarAttrib className="d-flex justify-content-start align-items-center"> 
            <InstaIcon className="fab fa-instagram col-1"></InstaIcon>
            <InstagramLogo className="col-4">Panda-gram</InstagramLogo>
            <form className="col-4">
                <SearchWindow placeholder="Search" type="text" onChange={props.onChange} name="input" value={props.input} className="input-search"/>
            </form>
            <TopIcons className="col-3 d-flex justify-content-around">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <LogoutButton onClick={props.logOut} className="far fa-user"></LogoutButton>               
            </TopIcons>
        </SearchBarAttrib>



    );
}
 
export default SearchBar;