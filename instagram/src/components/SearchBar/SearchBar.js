import React from 'react';
import './SearchBar.css';
import instagram from '../../assets/instagram.png';
import styled, {css} from "styled-components";
import { Input, Button } from 'reactstrap';

 
const Header = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 10vh;
    border-bottom: 1px solid #D3D3D3;
    width: 100%;
`;

const LogoHeader = styled.div`
    padding-right: 20%;
`;

const LogoImage = styled.img`
    height: 200px;
`;

const SearchBarWrapper = styled.div`
    position: relative;
`;

const SearchForm = styled.div`
    height: 35px;
    text-align: center;
    font-size: 1.1rem;
    color: grey;
    border-radius: 5px;
    border: 1px solid lightgray;
`;

function SearchBar(props) {
    return (
        <Header>
            <i className="fab fa-instagram"></i>
            <span className="vertical-line"></span>
            <LogoHeader>
                <LogoImage src={instagram} alt="logo"/>
            </LogoHeader>
            <SearchBarWrapper>
                <span className="fa fa-search"></span>
                    <Input type="text" className="search-bar" placeholder="Search" name='search'  onChange={props.handleInput}/>
            </SearchBarWrapper>
            <div>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
                <Button onClick = {props.logOutClick} size = "small">Log out</Button>
            </div>
        </Header>
    );
};
 export default SearchBar; 