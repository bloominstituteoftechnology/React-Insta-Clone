import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    border: 1px solid red;
    height: 80px;
    line-height: 70px;
    justify-content: space-between;
    `;



const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'login' ? `background-color: purple;` : null)}
    `;


export {StyledHeader, Button};