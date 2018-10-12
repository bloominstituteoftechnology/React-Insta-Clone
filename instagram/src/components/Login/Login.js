import React from 'react';
import {LoginInput,LoginHeader,Spacer20,Spacer10,LoginButton} from '../Styled/Styled'
import Styled from 'styled-components';

const WrapperDiv = Styled.div`
    line-height:2rem;
    height:400px;
    width:400px;
    background-color:white;
    border-radius:3px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
`
const FlexDiv = Styled.div`
    display:flex;
    justify-content:space-between;
`
const LogoImage = Styled.img`
    height:50px;
    width:50px;
`
const LoginMessage = Styled.p`
    color: red;
    font-size:1.6rem;
`

const Login = props => {
    let loginMessage = ''
    if(!props.loginStatus)
    {
        loginMessage = 'Both The Username And Password Are Required.'
    } 

    return( 
        <WrapperDiv>
                <LogoImage src={require('../../static/img/Instagram.png')}></LogoImage>
                <Spacer20></Spacer20>
                <Spacer20></Spacer20>
                <LoginHeader>UserName</LoginHeader><LoginInput id='txtUserName' placeholder='Username' value={props.txtUserName} onChange={props.userNameChange}></LoginInput>
                <Spacer10></Spacer10>
                <LoginHeader>Password</LoginHeader><LoginInput type='password' id='txtPassword' placeholder='Password' value={props.txtPassword} onChange={props.passwordChange}></LoginInput>
                <Spacer20></Spacer20>
                <LoginMessage>{loginMessage}</LoginMessage>
                <Spacer20></Spacer20>
                <FlexDiv>
                    <LoginButton onClick={props.login}>Log In</LoginButton>
                </FlexDiv>
        </WrapperDiv>
    )
}


export default Login

