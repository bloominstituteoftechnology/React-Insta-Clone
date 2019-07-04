import React from 'react';
import styled from 'styled-components';


export const Button = styled.button`
    border: 0;      
    padding:15px 0;
    font-size:2rem;
    font-weight: bold;
    text-transform:uppercase;
    letter-spacing : .1em;
    background : #1ab188;
    color : white;
    transition:all.5s ease;
    display : block;
    width : 40%;
    margin-top: 40px;
    margin-left: 160px;
    border-radius: 5px;

    ${props => (props.type === 'logout' ? `background : black; width : 200px; margin-left : 860px;` : null)}
`;

export const Formdiv = styled.div`
    background: #13232f;
    padding: 40px;
    max-width:600px;
    margin:40px auto;
    border-radius: 6px;
    box-shadow:0 4px 10px 4px #13232f;
    font-family: 'Titillium Web', sans-serif;
    color : white;
`;