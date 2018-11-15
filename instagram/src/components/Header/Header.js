import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../../assets/instagram_logo.png';
import styled, { css } from 'styled-components';

const HeaderWarpper = styled.header`
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    width: 100%;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
    padding-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    position: fixed;
    top: 0px;
    background: rgba(255, 255, 255, 0.975);
`;

const HeaderLogo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 150px;
    font-size: 3rem;
    margin-left: 10px;
`;

const HeaderLogoImg = styled.img`
    max-height: 30px;
    width: auto;

    ${props => props.logo && css`
        margin-top: 2px;
    `};

    ${props => props.words && css`
        margin-top: 3px;
    `};
`;

const HeaderLogoDiv = styled.div`
    max-height: 30px;
    width: auto;
`;

const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 150px;
    font-size: 3rem;
    margin-right: 10px;
`;

const Header = props => {
    return (
        <HeaderWarpper>
            <HeaderLogo>
                <HeaderLogoImg logo alt="instagram logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/240px-Instagram_simple_icon.svg.png' />
                <HeaderLogoDiv>|</HeaderLogoDiv>
                <HeaderLogoImg words src={logo} alt="Instagram Word"/>
            </HeaderLogo>

            <SearchBar 
                handleInputChange={props.handleInputChange}
                filter={props.filter}
            />

            <HeaderMenu>
                <div className="far fa-compass"></div>
                <div className="far fa-heart"></div>
                <div onClick={props.logOut} className="far fa-user"></div>
            </HeaderMenu>
        </HeaderWarpper>
    );
}

Header.propTypes = {
    filter: PropTypes.string,
    handleInputChange: PropTypes.func
};

export default Header;