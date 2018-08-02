import React from 'react';
import './searchbar.css';
import styled from 'styled-components';

const InstagramLogo = styled.img`
    padding-top: 5px;
    margin-left: 10px;
    width:18%;
`

const SearchBarAttrib = styled.div`
    margin: 20px 0;
`

const InstaIcon = styled.i`
font-size: 36px;
    margin-right: 10px;
`

const TopIcons = styled.div`
    font-size: 20px;
`

const LogoutButton = styled.i`
cursor: pointer;
`

const SearchBar = (props) => {
    return ( 
        <SearchBarAttrib className="row d-flex justify-content-start align-items-center"> 
            <InstaIcon className="fab fa-instagram col-1"></InstaIcon>
            <InstagramLogo src="https://cdn.iphoneincanada.ca/wp-content/uploads/2017/06/Instagram_logo.svg_.png" alt=""/>
            <form className="col-5">
                <input placeholder="&#xf002; search" type="text" onChange={props.onChange} name="input" value={props.input} className="input-search"/>
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