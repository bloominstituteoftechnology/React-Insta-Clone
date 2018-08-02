import React from 'react'; 
import "./SearchBar.css"; 
import styled from 'styled-components'; 
import {Form, Input, Button} from 'reactstrap'; 

//custom styled-components

const Header = styled.header`
    display: flex; 
    justify-content: space-between; 
    margin-top: 30px; 
    padding-bottom: 10px;
    border-bottom: 1px solid lightgrey; 
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
                <Input onChange = {props.change} className = "search-input fa fa-input" type = "search" placeholder = "&#xf002; Search"/>
            </Form>
            <NavigationIcons className = "nav-icons">
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-user fa-2x"></i>
                <Button onClick = {props.logOutClick} size = "small">Log out</Button>
            </NavigationIcons>
        </Header>
    )
}

export default SearchBar; 
