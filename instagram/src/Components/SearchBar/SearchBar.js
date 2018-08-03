import React from 'react'; 
import "./SearchBar.css"; 
import styled from 'styled-components'; 
import {Form, Input, Button} from 'reactstrap'; 

//custom styled-components

const Header = styled.header`
    display: flex; 
    justify-content: space-around; 
    padding-top: 10px; 
    padding-bottom: 10px;
    border-bottom: 1px solid lightgrey; 
    position: fixed; 
    top: 0; 
    width: 100%; 
    background-color: white;
    
`;

const LogoHeader = styled.div`
    display: flex; 
`; 

const NavigationIcons = styled.div`
    display: flex; 
    align-items: center; 
`;


const SearchBar = props => {
    return (
        <Header>
            <LogoHeader>
                <i className=" instaLogo fab fa-instagram fa-2x"></i>
                <img className = "insta-logo" src = {require("./insta-logo.png")} alt = "Instagram logo"/>
            </LogoHeader>
            <Form onSubmit = {props.submit} className = "search">
                <Input color = "primary" onChange = {props.change} className = "search-input fa fa-input" type = "search" placeholder = "&#xf002; Search"/>
            </Form>
            <NavigationIcons className = "nav-icons">
                <i className="far fa-compass "></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
                <Button onClick = {props.logOutClick} size = "sm" className = "btn-light"><i className="fas fa-sign-out-alt"></i></Button>
            </NavigationIcons>
        </Header>
    )
}

export default SearchBar; 
