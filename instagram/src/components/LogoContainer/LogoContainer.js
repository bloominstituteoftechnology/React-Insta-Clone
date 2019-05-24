import React from 'react';
import Styled from 'styled-components';

const WrapperDiv  = Styled.div`
    display: flex;
`
const LogoDivider = Styled.div`
    border-right: 1px solid black;
`
const LogoImage = Styled.img`
    height:28px;
    width: 28px;
    margin-right:23px;
`
const LogoLettering = Styled.img`
    margin-left:23px;
    height:29px;
    width: auto;
`

const LogoContainer = props => {
    return(
         <WrapperDiv>
             <LogoDivider>
                <LogoImage alt='logo' src={require('../../static/img/logo.png')}></LogoImage>
            </LogoDivider>
             <div>
                <LogoLettering alt='instagram' 
                               src={require('../../static/img/lettering.png')}>
                </LogoLettering>
            </div>
         </WrapperDiv>
    )
}

export default LogoContainer