import React from 'react';
import styled from 'styled-components';



const LoginPagediv = styled.div`
    background: offwhite;
    width: 100%;
    max-width: 300px;
    height: 260px;
    margin: 0 auto;
    margin-top: 200px;
    border: 1.5px solid lightgray;
    border-radius: 5px;
    text-align: center;
`

const LoginHeader = styled.h1`
    font-size: 18px;
`

const LoginForm = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoginInput = styled.input `
    margin-top: 12px;
    width: 160px;
    height: 30px;
    text-align: center;
    font-size: 15px;
`

const LoginButton = styled.button `
    margin-top: 20px;
    width: 70px;
    height: 27px;
`



class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            usernameInput: '',
            passwordInput: '',
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        console.log('setting state', event.target.name)
    }

    logIn = event => {
        localStorage.setItem('username', this.state.usernameInput);
    }

    render() {
        return (
            <LoginPagediv>
                <LoginForm>
                    <LoginHeader>Instagram</LoginHeader>
                    <LoginInput onChange={this.handleChange} placeholder="username.." name="usernameInput"/>
                    <LoginInput onChange={this.handleChange} placeholder="password.." name="passwordInput"/>
                    <LoginButton onClick={this.logIn}>Log in</LoginButton>
                    <LoginButton onClick={this.logIn}>Sign up</LoginButton>
                </LoginForm>
            </LoginPagediv>
        )
    }
}

export default LoginPage;