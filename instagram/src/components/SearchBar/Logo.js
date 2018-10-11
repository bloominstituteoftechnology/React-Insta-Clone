import React from 'react';
import styled from 'styled-components';

let Div = styled.div`
display: flex;
flex-flow: row nowrap;
`;

let LogoImage = styled.img`
    height: 25px;
    width: auto;
`;

let Wordmark = styled.img`
    height: 25px;
    width: 100px;
    margin-left: 16px;
    border-left: 0.5px solid black;
    padding-left: 14px;
`;

let Logo = () => {
    return (
        <Div>
            <LogoImage alt="logo" src={require('./assets/logo.png')}/>
            <Wordmark alt="wordmark" src={require('./assets/wordmark.svg')} />
        </Div>
    )
}

export default Logo;