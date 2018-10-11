import './SearchBar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import PropType from 'prop-types';
import {faCompass} from '@fortawesome/free-solid-svg-icons';
import styled, {css} from "styled-components";

library.add(faHeart);
library.add(faUserCircle);
library.add(faCompass);
const SearchDiv = styled.div`
height: 100px;
    display: flex;
    justify-content: center;
    width: 100%;
    
    align-items: center;
    background: white;
    ${props => props.contain ? css` 
    width: 80%;
    max-width: 850px;
    justify-content: space-between;
    justify-self: center;
    ` : null}
    ${props => props.logoDiv ? css`
    width: 25%;
    
    
    `: null}
`;

const LogoImage = styled.img`
    content: url('https://i1.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Instagram-Logo.png?resize=300%2C300');
    padding: 0 5px 0 5px;
    width: 40px;
    height: auto;
    border-right: solid 1px gray;
    `;




const SearchBar = (props) => {

    return (
        <SearchDiv>
        <SearchDiv contain>
        <SearchDiv logoDiv>
            <LogoImage />
            <img className='instaword' src='https://cdn.worldvectorlogo.com/logos/instagram-1.svg'  />
        </SearchDiv>

        <input type='text' 
               placeholder="Search" 
               
               onKeyDown={props.filter} />
        <div className='icon-div'>
        <FontAwesomeIcon className="icon" icon="compass" />
        <FontAwesomeIcon icon="heart" onClick={props.animate} />
        <FontAwesomeIcon icon="user-circle" onClick={props.logOut}/>
        </div>
        </SearchDiv>
        </SearchDiv>
    )

}

export default SearchBar;