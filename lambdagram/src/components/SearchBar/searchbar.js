import React from 'react';
import PropTypes from 'prop-types';
// import './searchbar.css';
import Styled from 'styled-components';

import camera from '../../assets/camera.png';
import lambdagram from '../../assets/lambdagram.png';
import compass from '../../assets/compass.png';
import heart from '../../assets/heart.png';
import usericon from '../../assets/user.png';

const ASearchBar = Styled.div`
    width: 100%;
    height: 50px;
    top: 0;
    position: fixed;
    z-index: 99;
    background-color: #ffffff;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo = Styled.div`
    display: flex;
`;
const SearchImg = Styled.img`
    margin: 5px;
`;
const SearchBreaker = Styled.div`
    border: none;
    background-color: #000000;
    width: 1px;
    height: 32px;
    margin: auto;
`;
const SearchBox = Styled.input`
    border-radius: 3px;
    background-color: #fafafa;
    border: 1px solid lightgray;
    outline: none;
    &:focus {
        background-color: white;
    }
`;

function SearchBar(props) {
    return (
        <ASearchBar>
            <Logo >
                <SearchImg src={camera} alt='Camera' />
                <SearchBreaker />
                <SearchImg src={lambdagram} alt='Lambdagram' />
            </Logo>
            <form onSubmit={props.handleSearch} >
                <SearchBox
                    name='searchInput' 
                    type='text' 
                    placeholder='Search' 
                    value={props.searchInput} 
                    onChange={props.handleSearchInput} 
                ></SearchBox>
            </form>
            <div>
                <SearchImg src={compass} alt='Compass' />
                <SearchImg src={heart} alt='Heart' />
                <SearchImg src={usericon} alt='User' />
            </div>
        </ASearchBar>
    );
}

SearchBar.propTypes = {
    searchInput: PropTypes.string.isRequired,
    handleSearchInput: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;
