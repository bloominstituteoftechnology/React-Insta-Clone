import React from 'react';
import Styled from 'styled-components';

const LoginBox = Styled.div`
    display: flex;
    justify-content: space-evenly;
    `;

    const TextBox = Styled.input`
    width: 170px;
    height: 30px;
    font-size: 14px;
    `;


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
         <button onClick={props.logIn}>Log in</button>
        </LoginBox>
    );
}


export default Login;