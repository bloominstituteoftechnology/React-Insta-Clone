import React from 'react';
import Styled from 'styled-components';

const LoginBox = Styled.div`
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 718px) {
        flex-direction: column;
        align-items: center;
    }
    `;

    const TextBox = Styled.input`
    width: 170px;
    height: 30px;
    font-size: 14px;
    `;
    
    const LoginButton = Styled.button`
    @media (max-width: 718px) {
        width: 174px;
        height: 30px`


const Login = props => {
    return (
        <LoginBox>
        <TextBox 
            type='text'
            className='username'
            placeholder='Username'
            defaultValue=''
            onChange={props.handleUser}
            />
        
        <TextBox 
            type='text'
            className='password'
            placeholder='Password'
            defaultValue=''
            onChange={props.handlePassword}
            />
         <LoginButton onClick={props.logIn}>Log in</LoginButton>
        </LoginBox>
    );
}


export default Login;