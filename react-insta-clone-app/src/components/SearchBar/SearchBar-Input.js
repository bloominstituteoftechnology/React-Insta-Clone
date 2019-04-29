import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 20px;
    width: 35%;
`

export default function InputComponent(props){
    return (
        <StyledInput placeholder={props.placeholder} className={props.className} onChange={props.input} onKeyPress={props.onEnter} ></StyledInput>
    );
}