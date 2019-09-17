import React, { Component } from 'react';
// import dummyData from './src/dummy-data';
import instagram from '../../instagram-brands.svg';
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faCompass, faHeart);

// const searchIcon = <i className="fas fa-search" />

const SearchBarContainer = styled.div`
    border-bottom: 1px solid #EDEDED;

    .search-bar {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }

    .logo-container {
        display: flex;
        align-items: center;
        /* flex-wrap: wrap; */
        width: 15%;
        padding: 0;
    }

    .search-box {
        width: 60%;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 20px;

        input {
        background-color: #FAFAFA;
        border: 1px solid #EDEDED;
        text-align: center;
        }
    }

    .icon-container {
        display: flex;
        width: 15%;
        justify-content: space-evenly;
        align-items: center;
        color: #222222;

        i {
            max-width: 40px;
            cursor: pointer;
        }
    }

`

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <div className="search-bar">
                <div className="logo-container">
                    <img className="App-logo" src={instagram} alt="logo" />
                    <img className="App-text-logo" src="https://fontmeme.com/images/instagram-new-logo.png" alt="logo"/>
                </div>
                <div className="search-box">
    <input type="text" name="inputText" placeholder="Search"
                    ></input>
                    
                </div>
                <div className="icon-container">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </div>
        </SearchBarContainer>
    )
}

export default SearchBar;