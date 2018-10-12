import React from 'react';
import styled from '../../../node_modules/styled-components';

const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center
`

const InstaIcon = styled.i`
    margin-right: 25px;
    color: black
`

const LogoImage = styled.img`
    width:200px;
    height: 60px;
    padding-left: 25px;    
    border-left: 2px solid lightgrey;
    align-self: flex-end;
    padding-top: 20px;
`

export default () =>    <LogoContainer>
                            <InstaIcon className="fab fa-instagram fa-4x"></InstaIcon>
                            <LogoImage src="https://buxton.com.au/static/img/instagram.svg" alt="insta Logo" />                            
                        </LogoContainer>

