import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, {css} from "styled-components";
import {Header, LogoHeader, LogoImage} from './SearchBarStyles';


function SearchBar(props) {
    return (
        <Header>
            <LogoHeader>Search Bar</LogoHeader>
            <LogoImage>                
                <input value={props.searchInput} onChange={props.handleSearchInput} placeholder="search here..." type="text" />
                <button onClick={props.searchData} type='button'>Sumbit</button>
            </LogoImage>
        </Header>
    )
}

export default SearchBar