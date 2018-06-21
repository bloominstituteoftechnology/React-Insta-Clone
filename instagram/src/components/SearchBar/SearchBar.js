import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const Header = styled.header`
	height: 70px;
	background: lightgray;
	border-bottom: 3px solid #084c61;
`;


const SearchBar = props => {
    return (
    <Header>
      
            <div className="ig-logo-icons float-left">
                <i className="fab fa-instagram "></i>
                <img src="" className="ig-logo" alt="Ig Word Logo" />
            </div>
            <div className="search-bar-box">
                <i className="fas fa-search"></i>
                <input className="Search-box" placeholder="Search" onKeyDown={props.searchPosts}/>
            </div>
            <div className="ig-icons float-right">
                <i className="far fa-compass search-compass-icon"></i>
                <i className="far fa-heart search-heart-icon"></i>
                <i className="far fa-user"></i>
            </div>
        
        </Header>
    );
};

export default SearchBar;


