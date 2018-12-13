import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../assets/insta-logo.png';
import textLogo from '../../assets/insta-title.png'; 
import compass from '../../assets/insta-compass.png';
import heart from '../../assets/insta-heart.png';
import profile from '../../assets/insta-profile.png';

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
`;

const Logo = styled.img`
    max-height: 35px;

    &:first-child {
        padding-right: 10px;
        border-right: 1px solid rgba(128, 128, 128, 0.3);
    }

    &:last-child {
        margin-left: 10px;
    }
`;

const Icon = styled.img`
    margin-right: 8%;
    max-height: 25px;
    width: auto;

    &:last-child {
        margin-right: 0;
    }
`;


//////////////////////////////////////////////////////////////////////////////////////


const SearchBar = props => (
    <Container>
        <div>
            <Logo src={logo} alt="Instagram Logo" draggable="false" />
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
            <Icon src={compass} alt="compass icon" draggable="false" />
            <Icon src={heart} alt="heart icon" draggable="false" />
            <Icon src={profile} alt="profile icon" draggable="false" onClick={props.onLogout}/>
        </div>
    </Container>
);

SearchBar.propTypes = {
    onSearch: PropTypes.func,
    onSearchInput: PropTypes.func,
    onLogout: PropTypes.func,
};

export default SearchBar;