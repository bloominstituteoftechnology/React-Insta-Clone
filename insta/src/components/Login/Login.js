import React, { Component } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.section `
    width: 50%;
    margin: 0 auto;
`;

const Input = styled.input `
    width: 100%;
    margin: 20px 0;
`;

const Button = styled.button `
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 100%;
`;

class Login extends Component {
    render() {
        return (
            <LoginContainer>
                <h1>Login to have access</h1>
                <form onSubmit={this.props.login}>
                    <Input type='text' placeholder='Username' name='username' />
                    <Input type='text' placeholder='Password' name='password'/>
                    <Button>Login</Button>
                </form>
            </LoginContainer>
        )
    }
}

export default Login;