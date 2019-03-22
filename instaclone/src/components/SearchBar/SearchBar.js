import React from 'react';
import "./SearchBar.css";
import logo from "../../assets/iglogo.png";
import userIcon from '../../assets/user-icon.svg';
import compassIcon from '../../assets/compass.svg';
import heartIcon from '../../assets/heart.svg';
import icon from '../../assets/icon.svg'
import styled from 'styled-components';

const SearchContainer = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20% 0 20%;
    background-color: white;
    border-bottom: 1px solid #E6E6E6;
    margin-bottom: 50px;
`
const LogoContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: flex-start;
`

const SearchInput = styled.input`
    height: 25px;
    margin-bottom: 5px;
    background-color: #FAFAFA;
    border: 1px solid #E6E6E6;
    color: #DCDCDD;
    text-align: center;
`

const SearchForm = styled.form`
    margin-left: -5%;
`

const SearchBar = props => {
    return(
        <SearchContainer>
            <LogoContainer>
                <img className="search-bar-icon logo-icon" src={icon} alt="instagram icon" />
                <img alt="logo" src={logo} className="logo" />
            </LogoContainer>
            <SearchForm onChange={props.searchPosts}>
            <SearchInput type="text" placeholder="Search" name="search" value={props.search} onChange={props.inputHandler}/></SearchForm>
            
            <div className="search-bar-icons">
                    <img className="search-bar-icon" src={compassIcon} alt="compass icon" />
                    <img className="search-bar-icon heart-icon" src={heartIcon} alt="heart icon" />
                    <img className="search-bar-icon user-icon" src={userIcon} alt="user icon" />
                </div>
            
        </SearchContainer>
    )
}

export default SearchBar;