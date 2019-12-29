import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';
import styled from 'styled-components';

const Header = styled.header `
        border-bottom: 1px solid gray;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 1040px;
        margin: 0 auto;
    `;

const LogoHeader = styled.div `
        margin: 15px;
        width: 130px;
        height: 35px;
        display: flex;
        flex-direction: row;
    `;

const LogoImage = styled.img `
        width: 80px;
        height: 30px;
        margin-left: 15px;
        margin-top: 5px;
    `;

const SearchForm = styled.form `
        display: flex;
        justify-content: flex-start;
        align-items: center;
    `;

const SearchControl = styled.input `
        width: 150px;
        height: 20px;
    `;

const SocialWrapper = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
    `;

const Social = styled.div `
        margin-right: 30px;
    `;

const SearchBar = props => {
    return (
        <Header>
            <LogoHeader>
                <i class='fab fa-instagram fa-2x'></i>
                <LogoImage src={IGLogo} alt='instagram logo' />
            </LogoHeader>

            <SearchForm onSubmit={props.search} onChange={props.handleChange}>
                <SearchControl name='search' type='text' placeholder='Search' />
            </SearchForm>

            <SocialWrapper>
                <Social>
                    <i class='far fa-compass fa-2x'></i>
                </Social>

                <Social>
                    <i class='far fa-heart fa-2x'></i>
                </Social>

                <Social>
                    <i class='far fa-user fa-2x'></i>
                </Social>
            </SocialWrapper>
        </Header>
    );
};

export default SearchBar;