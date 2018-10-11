import React from 'react';
import './searchbar.css';
import styled from 'styled-components';

const InstagramLogo = styled.h1`
    font-family: 'Poiret One', cursive;
    font-size: 28px;
    text-shadow: 3px 3px 5px darkslategray;
    color: white;
}
`

const SearchBarAttrib = styled.div`
    padding: 15px;
    background: lightgray;
    width: 100%;
    border-bottom: 1px solid black;
    background: #AB2317;
`

const InstaIcon = styled.i`
    font-size: 28px;
    //margin-right: 10px;
    text-shadow: 3px 3px 5px darkslategray;
    color: white;
`

const TopIcons = styled.div`
    font-size: 28px;
    text-shadow: 3px 3px 5px darkslategray;
    color: white;
`

const LogoutButton = styled.i`
    cursor: pointer;
    color: white;
`

const SearchWindow = styled.input`
    border-radius: 5px;
    border: 1 px solid black;
    box-shadow: 3px 3px 5px darkslategray;
    font-family: 'Poiret One', cursive;
    font-size: 20px;
    padding-left: 10px;
`

const SearchBar = (props) => {
    return ( 
        <SearchBarAttrib className="d-flex justify-content-start align-items-center"> 
            <InstaIcon className="fa fa-instagram col-1"></InstaIcon>
            <InstagramLogo className="col-4">Lambda-Gram</InstagramLogo>
            <form className="col-4">
                <SearchWindow placeholder="&#128269; Search" type="text" onChange={props.onChange} name="input" value={props.input} className="input-search"/>
            </form>
            <TopIcons className="col-3 d-flex justify-content-around">
                <i className="fa fa-compass"></i>
                <i className="fa fa-heart"></i>
                <LogoutButton onClick={props.logOut} className="fa fa-sign-out"></LogoutButton>               
            </TopIcons>
        </SearchBarAttrib>



    );
}
 
export default SearchBar;

//SearchBar.js