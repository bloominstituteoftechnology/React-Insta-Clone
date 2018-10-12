import React, { Component } from 'react';
import styled from 'styled-components';

const LoginLabel = styled.h1`
    font-size: 64px;
    text-shadow: 3px 3px 0 #2C2A22;
    color: #ffffff;
    font-family: 'Mali', cursive;
`

const LoginText = styled.input`
    margin: 20px 0;
    border: 1px solid #000000;
    border-radius: 10px;
    box-shadow: 0 0 10px darkgray;
    font-family: 'Mali', cursive;
    font-size: 24px;
`

const EnterBtn = styled.button`
    margin: 25px 0;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px darkgray;
    padding-left: 10px;
`

const LoginPage = styled.div`
    height: 100vh;
    width: 100vw;
    background: #311254;
`

const LoginImg = styled.img`
    width: 400px;
`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    handleLoginChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    loginHandler = (e) => {
        const user = this.state.username;
        localStorage.setItem('user', user);
    };

    render() {
        return (
            <LoginPage className="d-flex justify-content-center">
                <form autoComplete="off" className="login-container d-flex flex-column justify-content-center">
                    <LoginImg src={require('../images/avengers-logo.jpg')} alt="" />
                    <LoginLabel>Avengers Login</LoginLabel>
                    <LoginText
                        type="text"
                        placeholder="Enter Your Login Name"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleLoginChange}
                    />
                    <LoginText
                        type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleLoginChange}
                    />
                    <EnterBtn onClick={this.loginHandler}>
                        Login
                    </EnterBtn>
                </form>
            </LoginPage>    
        )
    };
}

export default Login;