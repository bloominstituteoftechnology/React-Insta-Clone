import React from 'react';
import SearchBar from './SearchBar';
import './header.css';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const InstaHam = styled.div`
    font-family: 'Kaushan Script', cursive;
    font-size: 1.8rem;
    margin: 1%;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <i className="icon fab fa-instagram fa-3x"></i> |
            <InstaHam>Instaham</InstaHam>
            <SearchBar changeSearchTerm={props.changeSearchTerm}/>
            <i className="icon far fa-compass fa-3x"></i>
            <i className="icon far fa-heart fa-3x"></i>
            <i className="icon far fa-user fa-3x"></i>
        </HeaderContainer>
    )
}

export default Header;