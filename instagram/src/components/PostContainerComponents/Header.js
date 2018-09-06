import React from 'react';
import './Post.css';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    font-weight: bold;
    padding-bottom: 20px;
    padding-top: 15px;
    padding-left: 20px;
    text-align: left;
    margin-left: 6.5%;
    width: 87%;
    border: 1px solid lightgray;
    border-radius: 3px;
`;


const Header=(props)=> {
    return (
        <HeaderContainer>
           <div className='thumbnail'>
            <img className='thumbnail-img' src={props.thumbnail}/>
           </div>
           <div className='username'>
            {props.username}
           </div>
        </HeaderContainer>
    );
};

export default Header;