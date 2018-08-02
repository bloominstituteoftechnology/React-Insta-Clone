import React from 'react';
import logo from '../../assets/instagramlogin.png';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    border-bottom: 1px solid #D3D3D3;
`;

const DoubleLogosWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ImgWrapper = styled.img`
    padding-left: 20px;
    height: 50px;
`;

const SearchBarWrapper = styled.div`
    position: relative;
`;

const SearchBarSearch = styled.input`
    width: 400px;
    height: 50px;
    text-align: center;
    font-size: 25px;
    color: grey;
`;

const SocialWrapper = styled.div`

`;

const InstagramLogo = styled.i`
    margin: 40px 0 40px 40px;
    padding-right: 40px;
    font-size: 70px;
    border-right: 1px solid grey;
`;

const SearchIcon = styled.span`
    position: absolute;
    top: 30%;
    left: 30%;
    font-size: 25px;
    color: gray;
    z-index: 1;
`;

const Icon = styled.i`
    margin: 0 25px;
    font-size: 50px;
    font-weight: 100;
    -webkit-text-stroke: 3px white;
`;

const LastIcon = styled.i`
    padding-right: 20px;
`;

const SearchBar = props => {
    return (
        <Header>
            <DoubleLogosWrapper>
                <InstagramLogo className="fab fa-instagram" />
                <ImgWrapper src = {logo} alt="logo" />
            </DoubleLogosWrapper>
            <SearchBarWrapper>
                <SearchIcon className="fa fa-search" />
                <SearchBarSearch type="text" placeholder="Search" className="search-bar" onKeyDown={props.searchPosts}/>
            </SearchBarWrapper>
            <SocialWrapper>
                <Icon className="far fa-compass" />
                <Icon className="far fa-heart" />
                <LastIcon className="far fa-user" />
            </SocialWrapper>
        </Header>
    );
};

export default SearchBar;