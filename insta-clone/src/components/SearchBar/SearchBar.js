import React from 'react';
import './SearchBar.css';
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

const SearchBar = props => {
    return (
        <Header>
            <DoubleLogosWrapper>
                <i className="fab fa-instagram"></i>
                <ImgWrapper src = {logo} alt="logo" />
            </DoubleLogosWrapper>
            <SearchBarWrapper>
                <span className="fa fa-search"></span>
                <SearchBarSearch type="text" placeholder="Search" className="search-bar" onKeyDown={props.searchPosts}/>
            </SearchBarWrapper>
            <SocialWrapper>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </SocialWrapper>
        </Header>
    );
};

export default SearchBar;