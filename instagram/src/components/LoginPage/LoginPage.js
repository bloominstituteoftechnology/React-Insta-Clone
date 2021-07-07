import React from 'react'
import styled from 'styled-components'


const LoginForm = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
`;

const LoginUser = styled.input`
    border: 1px solid gray;
    display: flex;
    border-radius: 3px;
    height: 20px;
    margin-bottom: 10px;
    text-align: center;
    :focus{
        text-align: left;
        outline: none;
    }
`;
const LoginBackground = styled.div`
    background-image: url('https://media.giphy.com/media/KroNtkbhpoJoc/giphy.gif');
    width: 100%;
    height: 100%;
`;
const LoginButton = styled.button`
    width: 40%;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-70%)
`;
const LoginPage = props =>{
    return(
        <LoginBackground>
            <LoginForm>
                <p>Login:</p>
                <LoginUser
                placeholder = 'Username'
                type ="text"
                value ={props.user} 
                onChange ={props.userHandler}/>
                <p>Password:</p>
                <LoginUser
                placeholder = 'Password'
                type ="password"
                value ={props.pass} 
                onChange ={props.passHandler}/><br />
            <LoginButton onClick = {props.submitHandler}>login</LoginButton>
            </LoginForm>
        </LoginBackground>
    )
}

export default LoginPage