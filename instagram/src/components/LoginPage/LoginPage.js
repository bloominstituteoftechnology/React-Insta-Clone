import React from 'react';
import styled from 'styled-components';

const LoginPageDiv = styled.div`
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
        this.setState({ [event.target.name]: event.target.value });
        // console.log(this.state.usernameInput)
    }

    userSubmit = event => {
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem("username", this.state.usernameInput);
        window.location.reload();

    }

    render() {
        // localStorage.setItem('test', 'testValue');
        // console.log(localStorage.getItem('test'))
        return (
            <LoginPageDiv>
                <LoginForm>
                    <LoginHeader>Instagram</LoginHeader>
                    <LoginInput 
                    onChange={this.handleChange} 
                    type="text" placeholder="username.." 
                    name="usernameInput" 
                    value={this.state.usernameInput}/>
                    <LoginInput 
                    onChange={this.handleChange} 
                    type="text" 
                    placeholder="password.." 
                    name="passwordInput"/>
                    <LoginButton onClick={this.userSubmit}>Log in</LoginButton>
                    <LoginButton >Sign up</LoginButton>
                </LoginForm>
            </LoginPageDiv>
        )
    }
}

export default LoginPage;