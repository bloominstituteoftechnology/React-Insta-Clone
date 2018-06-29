import React from 'react';
import './searchBar.css';
import styled from 'styled-components';
import instagramCommentHeart from "../../img/iconsAndLogos/instagram-comment-heart.png";
import instagramCommentBubble from "../../img/iconsAndLogos/instagram-comment-bubble.png";
import instagramCompass from "../../img/iconsAndLogos/instagram-compass.png"
import instagramHeaderHeart from "../../img/iconsAndLogos/instagram-header-heart.png"
import instagramUser from "../../img/iconsAndLogos/instagram-user.png" 
import instagramHeaderLogo from "../../img/iconsAndLogos/instagram-header-logo.png" 

const SearchBarInnerContainerStyles = styled.div`
    background-color:#ffffff;
    display:flex;
    max-width:900px;
    margin-left:auto;
    margin-right:auto;
    padding-top:20px;
    padding-bottom:20px;
    align-items:center;
    justify-content:space-between;
`
const SearchBarLogoStyles = styled.img`
    
`
const SearchBarIconStyles = styled.img`

`

const SearchBar = props => {
    return (
        <SearchBarInnerContainerStyles>
            <div>
            <SearchBarLogoStyles src={instagramHeaderLogo} />
            </div>
            <div>
                <form onSubmit = {props.searchUsername}>
                    <input 
                    type = "text" 
                    onChange = {props.searchFieldHandler}
                    placeholder = "Search"
                    value = {props.activeValue}
                    />
                </form>
            </div>
            <div>
                <SearchBarIconStyles src = {instagramCompass} alt = "" />
                <SearchBarIconStyles src = {instagramHeaderHeart} alt = "" />
                <SearchBarIconStyles src = {instagramUser} alt = "" />
            </div>
        </SearchBarInnerContainerStyles>
    );
}

export default SearchBar;