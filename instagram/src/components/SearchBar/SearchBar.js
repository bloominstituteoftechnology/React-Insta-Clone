import React from 'react';
import './SearchBar.css';
import Logo from './SearchBarImages/screenshotlogo.png';
import Icons from './SearchBarImages/searchbaricons.png';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    margin-bottom: 50px;
    position: sticky;
    top: 0;
`;
const Header = styled.div`
    width: 1000px;
    max-width: 1000px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LogoHeader = styled.div`
    margin: 0 0 0 20px;
    width: 175px;
`;
const LogoImg = styled.img`
    height: 100%;
    width: 100%;
`;
const IconsImg = styled.img`
    width: 150px;
`;
const SearchInput = styled.input`
    font-size: 16px;
    width: 200px;
    text-align: center;
    line-height: 25px;
    background: #FAFAFA;
    border-radius: 3px;
    border: 1px solid lightgrey;
`;


const SearchBar = props => {
    return (
        <Wrapper>
            <Header>
                <LogoHeader>
                    <LogoImg src={Logo} alt="logo" />
                </LogoHeader>

                <SearchInput 
                    className="search-input" 
                    type="search" 
                    placeholder="Search" 
                    onKeyDown={props.searchPosts}
                />

                <div>
                    <IconsImg src={Icons} alt="logos" />
                </div>
            </Header>
        </Wrapper>
    )
}

export default SearchBar;