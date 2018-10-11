import React from 'react';
import logo from './instagramLogo.PNG'
import links from './instagramSearchBarLinks.PNG'
import styled from 'styled-components'

const SearchBarDiv = styled.div`
     display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0px;
    background: white;
    z-index: 2;
    width: 100%;
    border-bottom: 1px solid grey;

`;
const InstaLinks = styled.img`
    margin-right: 18%;
`
const SearchField = styled.input`
    color: grey;
    text-align: center;
    height: 50%;
    margin-top: 3%;
`
const InstaLogo = styled.img`
    margin-left: 18%;
`

const SearchBar = props => {
    return (
        <SearchBarDiv>
            <InstaLogo  src={logo} alt='instagram logo' />
            <form>
                <SearchField type='text' value={props.username} placeholder='username'></SearchField>
            </form>
            <InstaLinks src={links} alt='instagram links' />

        </SearchBarDiv>
    )
}

export default SearchBar;