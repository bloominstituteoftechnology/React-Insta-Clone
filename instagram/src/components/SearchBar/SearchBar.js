import React, { Component } from 'react';
import './SearchBar.css';
import styled from "styled-components";
import InstaLogo from '../../assets/insta-logo.jpeg';
import InstaText from '../../assets/instagram_text.png';
import NavIcon from '../../assets/nav-icon.png';
import UserIcon from '../../assets/user-icon.jpeg';
import HeartIcon from '../../assets/heart-icon.png';
import PropTypes from 'prop-types';

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid lightgray;
    margin-bottom: 20px;
    padding: 10px 0px 20px 0px;
    align-items: center;
    justify-content: space-between;
`;

const LogoContainer = styled.div`
    display: flex;
    height: 54px;
    width: 25%;
    padding-bottom: 10px;
`;

const SearchBox = styled.div`
    width: 32%;
    margin-left: 5%;
    display: flex;
`;

const SearchInput = styled.input`
    width: 200px;
    height: 20px;
    text-align: center;
    background: #f7f5f5;
    border: 1px solid lightgray;
    border-radius: 4px;
    font-size: 0.9rem;
`;

const IconContainer = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-between;
    height: 27px;
`;

const SearchBar = (props) => {
    return <HeaderContainer>
        <LogoContainer>
          <img src={InstaLogo} alt="instagram logo" className="insta-logo" />
          <img src={InstaText} alt="instagram text" className="insta-text" />
        </LogoContainer>
        <SearchBox>
          <form onChange={props.handleChange} onSubmit={props.searchPosts}>
            <SearchInput type="text" placeholder="Search" name="searchPosts" />
          </form>
        </SearchBox>
        <IconContainer>
          <img src={NavIcon} alt="Navigation Icon" className="icon" />
          <img src={HeartIcon} alt="Heart Icon" className="icon" />
          <img src={UserIcon} alt="User Icon" className="user-icon" />
        </IconContainer>
      </HeaderContainer>;
};

SearchBar.propTypes = {
    input: PropTypes.string
};

export default SearchBar;