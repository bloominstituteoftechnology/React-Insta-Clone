import React from 'react'
import styled from 'styled-components';

const HeaderElement = styled.header`
    display: flex;
    align-content: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding: 20px 0px;

`;
const Logo = styled.img`
    width: 40px;
    height: 40px;
    padding-right: 30px;
    border-right: 1px solid gray;
    border-radius: 0px;
`; 

const LogoText = styled.img`
    width: 150px;
    height: 40px;
    padding-left: 30px;
`;
const RightLogoDiv = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    margin-right: 10%;
`;
const LogoDiv = styled.div`
     height: 30px;
     margin-left: 10%;
`;

const RightImg = styled.img`
    height: 40px;
    width: 40px;

`;

const HeartLogo = styled.img`
    height: 30px;
    width: 30px;
    margin-top: 5px;
`;
const SearchBar = styled.input`
    width: 200px;
    height: 20px;
    padding-left: 4px;
    border-radius: 3px;
    border: 1px solid gray;
    text-align: center;
    :focus{
        outline: none;
        text-align: left;
    }

`;
const Header = props =>{
    return(
    <HeaderElement>
        <LogoDiv>
            <Logo src={require("../../images/instagram-logo.png")} alt="logo"/>
            <LogoText src={require("../../images/instagram-text.png")} alt="instagram"/>
        </LogoDiv>
            <div>
                <SearchBar type="text" placeholder='Search' onChange={props.searchHandler}/>
            </div>
        <RightLogoDiv>
            <RightImg src={require("../../images/explore-logo.png")} alt="explore logo" />
            <HeartLogo src={require("../../images/instagram-heart.png")} alt="explore logo" />
            <RightImg src={require("../../images/instagram-profile.png")} alt="explore logo" />
        </RightLogoDiv>
    </HeaderElement>
    )
}

export default Header