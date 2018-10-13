import React, { Component } from 'react';
import styled from 'styled-components';

// Styled Components:
const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 200px;
    background: ghostwhite;
    margin: 50px auto;
    border-radius: 10px
    border: 1px solid gray;
`;
const TitleWrapper = styled.div`
    font-size: 20px;
`;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    /* Log the user in */
    handleLogin = event => {
        localStorage.setItem('username', this.refs.userInput.value);
        localStorage.setItem('password', this.refs.passInput.value);
        window.location.reload();
    };
    render() {
        return (
            <LoginWrapper>
                <TitleWrapper>Login</TitleWrapper>
            <form onSubmit={this.handleLogin}>
                <input type='text' ref='userInput' placeholder="User Name"></input>
                <input type='password' ref='passInput' placeholder="Password"></input>
                <input type='submit' value="Login" ></input>
            </form>
            </LoginWrapper>
        );
    };
};

export default Login;