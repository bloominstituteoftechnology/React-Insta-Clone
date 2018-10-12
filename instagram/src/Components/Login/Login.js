import React from 'react';
import './login.css';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 25px;
    background-color: olivedrab;
    box-shadow: 8px 8px 4px grey;
    padding: 1%;
    margin-top: 15%;
`
const InputList = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`
const Label = styled.label`
    color: white;
    font-size: 1.6rem;
    width: 100%;
    text-align: center;
`

const LoginFormInput = styled.input`
    width: 100%;
`

const Button = styled.button`
    background-color: tomato;
    border: 2px solid black;
    border-radius: 8px;
    margin: 5% auto;
    width: 100%;
    padding: 5%;
    font-size: 1.2rem;
    box-shadow: 2px 2px 2px black;
`

const Login = (props) => {
    return (
        <LoginContainer>
            <InputList><Label>Username</Label><LoginFormInput onChange={props.loginUsernameHandler} type='text' /></InputList>
            <InputList><Label>Password</Label><LoginFormInput onChange={props.loginPasswordHandler} type='password' /></InputList>
            <InputList><Button onClick={props.loginHandler}>Login</Button></InputList>
        </LoginContainer>
    )
}

export default Login;