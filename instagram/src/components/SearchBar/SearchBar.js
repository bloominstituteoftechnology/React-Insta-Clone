import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const FullFlexRow = styled.div `
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        padding: 20px 0px;
    `;

const FlexColumnCenter = styled.div `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    `;

const SearchBarInput = styled.input.attrs({
    type: 'search',
    placeholder: 'Search...',
}) `   
        padding: 10px;
        border: 1px solid lightgray;
        border-radius: 5px;
        width: 200px;
    `;

const LogOutButton = styled.button `
    padding: 10px;
    max-width: 100%;
    background: white;
    border: 1px solid lightgray;
    cursor: pointer;
    border-radius: 5px;
`;    

const InstagramLogoIcon = styled.img `
    max-width: 40px;
`

const InstagramLogoText = styled.img `
    max-width: 150px;
    margin: 0px 10px;
    padding-top: 5px;
`

const VerticalLineDivide = styled.div `
    height: 40px;
    margin-left: 25px;
    margin-right: 10px;
    border-left: 1px solid black;
`

const SocialIcons = styled.div `
font-size: 20px;
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row nowrap;
`

const SearchBar = props => {
    return (
        <div className = 'search-container'>
        
            <FullFlexRow>
            <FlexColumnCenter>
                <InstagramLogoIcon src = {window.location.origin + '/img/instagram-logo-icon.jpg'}></InstagramLogoIcon>
                <VerticalLineDivide></VerticalLineDivide>
                <InstagramLogoText src = {window.location.origin + '/img/instagram-logo-text.png'}></InstagramLogoText>
            </FlexColumnCenter>

            <FlexColumnCenter>
            <SearchBarInput onKeyDown={props.search}></SearchBarInput>
            </FlexColumnCenter>

           <FlexColumnCenter>
               <SocialIcons>
               <i className = 'far fa-compass'></i>
               <i className = 'far fa-heart'></i>
               <i className = 'far fa-user'></i>
               <LogOutButton onClick={this.logout}>Logout</LogOutButton>
               </SocialIcons>
           
            </FlexColumnCenter>

            </FullFlexRow>
          
        </div>
    )
}

export default SearchBar;