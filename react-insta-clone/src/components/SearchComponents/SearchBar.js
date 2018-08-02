import React from "react";
import styled from 'styled-components';

const Header = styled.header`
    height: 77px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid lightgray;
    margin-bottom: 77px;
`;

const LogoHeader = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.img`
    height: 30px;
    padding-left: 10px;
    padding-top: 5px;
    border-left: 1px solid lightgray;
`;

const SearchInput = styled.input`
    font-size: 16px;
    text-align: center;
    width: 215px;
    line-height: 1.5;
    border-radius: 5px;
`;

const SocialIcons = styled.i`
    font-size: 24px;
    padding: 0 15px;
`;

const Instagram = styled.i`
    font-size: 30px;
    padding: 0 15px;
`;

const SearchBar = (props) => {
    return (
        <Header>
        <LogoHeader>
        <Instagram className="fab fa-instagram"></Instagram>
        <LogoImage alt="instagram logo" src="https://raw.githubusercontent.com/LambdaSchool/React-Insta-Clone/4079cf6fb6d11bd3ad7a422cdec35e0aab4e2bfe/instagram/src/assets/iglogo.png" className="logo" />
        </LogoHeader>
        <form onSubmit={props.searchPosts}>
        <SearchInput  type="text"
                className="fa fa-input"
                placeholder="&#xf002; Search"
                onChange={props.searchInputHandler}
                />
        </form>
        <div>
        <SocialIcons className="far fa-compass"></SocialIcons>
        <SocialIcons className="far fa-heart"></SocialIcons>
        <SocialIcons className="far fa-user"></SocialIcons>
        </div>
        </Header>
    )
}

export default SearchBar;