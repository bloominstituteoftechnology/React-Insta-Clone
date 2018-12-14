import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import textLogo from '../assets/insta-title.png'; 

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:  center;
    height: 80px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.3);
    margin-bottom: 20px;

    > * {
        display: flex;
        justify-content: center;
        width: 33.3%;
        width: calc(100%/3);
    }

    img {
        cursor: pointer;
        z-index: 1;
    }

    input {
        text-align: center;
    }
    div:first-child span {
        cursor: pointer;
        z-index: 1;
        font-size: 4rem;
        padding-right: 10px;
        border-right: 1px solid rgba(128, 128, 128, 0.3);
    }
`;

const Logo = styled.img`
    max-height: 35px;
    margin-left: 10px;
`;

const Icon = styled.span`
    margin-right: 8%;
    max-height: 25px;
    width: auto;
    font-size: 3rem;
    cursor: pointer;
    z-index: 1;

    &:last-child {
        margin-right: 0;
    }
    &:active {
        transform: translateY(1px);
    }
`;


//////////////////////////////////////////////////////////////////////////////////////


const SearchBar = props => (
    <Container>
        <div>
            <span className="fab fa-instagram"></span>
            <Logo src={textLogo} alt="Instagram" draggable="false" />
        </div>
        <div>
            {props.loginPage ? null : // Remove search capability if user is on the login page.
                (<input type="text" 
                    placeholder="&#128269;Search"
                    onChange={props.onSearchInput}
                    onKeyDown={(e) => { if(e.keyCode === 13) props.onSearch()}}
                />)}
        </div>
        <div>
            <Icon className="far fa-compass"></Icon>
            <Icon className="far fa-heart"></Icon>
            <Icon className="far fa-user" onClick={props.onLogout}></Icon>
        </div>
    </Container>
);

SearchBar.propTypes = {
    onSearch: PropTypes.func,
    onSearchInput: PropTypes.func,
    onLogout: PropTypes.func,
};

export default SearchBar;