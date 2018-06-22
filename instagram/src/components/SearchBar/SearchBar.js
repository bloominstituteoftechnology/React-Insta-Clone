import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';
import InstaLogo from './Instawhat.png';

const Header = styled.header`
	height: 100px;
	background: #FFD2DO;
	border-bottom: 3px solid #084c61;
	margin-bottom: 20px;
`;


const SearchBar = props => {
    return (
    <Header>
      
            <div className="ig-logo-icons float-left">
                <i className="fab fa-instagram "></i>
                <img src={InstaLogo} className="ig-logo" alt="Ig Word Logo" />
            </div>
            <div className="searchbar-wrapper">
            <div className="search-bar-box">
                <i className="fas fa-search"></i>
                <input className="Search-box" placeholder="Search" onKeyDown={props.searchPosts}/>
            </div>
            </div>
            <div className="ig-icons float-right">
                <i className="far fa-compass search-compass-icon"></i>
                <i className="far fa-heart search-heart-icon"></i>
                <i className="far fa-user search-user-icon"></i>
            </div>
        
        </Header>
    );
};

export default SearchBar;


